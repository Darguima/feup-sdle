import MVReg from "./mvreg";

function areRegistersEqual<T>(reg1: MVReg<T>, reg2: MVReg<T>): boolean {
    const values1 = reg1.read();
    const values2 = reg2.read();

    if (values1.length !== values2.length) {
        return false;
    }

    const sorted1 = [...values1].sort();
    const sorted2 = [...values2].sort();

    return JSON.stringify(sorted1) === JSON.stringify(sorted2);
}

describe("MVReg (Multi-Value Register)", () => {
    test("should write and read values correctly", () => {
        const reg1 = new MVReg<string>("node1");
        expect(reg1.read()).toEqual([]);

        const delta1 = reg1.write("value1");
        expect(reg1.read()).toEqual(["value1"]);

        const delta2 = reg1.write("value2");
        expect(reg1.read()).toEqual(["value2"]);

        const reg2 = new MVReg<string>("node2");
        const delta3 = reg2.write("value3");

        reg1.join(delta3);
        reg2.join(delta1);
        reg2.join(delta2);

        expect(areRegistersEqual(reg1, reg2)).toBe(true);
        expect(reg1.read().length).toBe(2);

        reg1.write("value4");
        expect(reg1.read()).toEqual(["value4"]);
    });

    test("should reset the register and clear all values", () => {
        const reg1 = new MVReg<string>("node1");
        reg1.write("value1");

        const reg2 = new MVReg<string>("node2");
        reg2.join(reg1);

        const resetDelta = reg1.reset();
        expect(reg1.read()).toEqual([]);

        reg2.join(resetDelta);
        expect(areRegistersEqual(reg1, reg2)).toBe(true);
    });

    test("should merge values from another register using join", () => {
        const reg1 = new MVReg<string>("node1");
        const reg2 = new MVReg<string>("node2");

        const delta1 = reg1.write("value1");
        reg1.join(delta1);

        const delta2 = reg2.write("value2");
        reg2.join(delta2);

        reg1.join(reg2);

        const values = reg1.read().sort();
        expect(values).toEqual(["value1", "value2"]);
    });

    test("should maintain idempotence when joining the same register multiple times", () => {
        const reg = new MVReg<string>("node1");
        reg.write("value1");

        const regClone = reg.clone();
        regClone.join(reg);

        expect(areRegistersEqual(reg, regClone)).toBe(true);
    });

    test("should maintain commutativity when joining registers in different orders", () => {
        const reg1 = new MVReg<string>("node1");
        const reg2 = new MVReg<string>("node2");

        reg1.write("value1");
        reg2.write("value2");

        reg1.join(reg2);
        reg2.join(reg1);

        expect(areRegistersEqual(reg1, reg2)).toBe(true);
    });

    test("should collapse the register to keep only the maximum value", () => {
        const reg1 = new MVReg<number>("node1");
        reg1.write(10);

        const reg2 = new MVReg<number>("node2");
        reg2.write(20);

        const reg3 = new MVReg<number>("node3");
        reg3.write(15);

        reg1.join(reg2);
        reg1.join(reg3);

        const regBeforeCollapse = reg1.clone();

        const collapseDelta = reg1.collapse((a, b) => (a > b ? a : b));
        expect(reg1.read()).toEqual([20]);

        regBeforeCollapse.join(collapseDelta);
        expect(areRegistersEqual(reg1, regBeforeCollapse)).toBe(true);
    });
});
