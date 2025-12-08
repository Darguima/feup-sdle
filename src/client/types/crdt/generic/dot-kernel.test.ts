import Dot from "./dot";
import DotKernel from "./dot-kernel";

describe("DotKernel", () => {
    let kernel: DotKernel<string>;

    beforeEach(() => {
        kernel = new DotKernel<string>();
    });

    test("should create a new DotKernel", () => {
        expect(kernel).toBeDefined();
        expect(kernel["dotValues"].size).toBe(0);
        expect(kernel.getContext()).toBeDefined();
    });

    test("should add a dot with a value", () => {
        const dot = kernel.dotAdd("node1", "value1");

        expect(dot.id).toBe("node1");
        expect(dot.seq).toBe(1);
        expect(kernel["dotValues"].get(dot.toKey())).toBe("value1");

        const dot2 = kernel.dotAdd("node1", "value2");
        expect(dot2.seq).toBe(2);
        expect(kernel["dotValues"].get(dot2.toKey())).toBe("value2");
    });

    test("should add a dot and return a delta kernel", () => {
        const delta = kernel.add("node1", "value1");

        expect(delta["dotValues"].size).toBe(1);
        expect(delta["dotValues"].get([...delta["dotValues"].keys()][0])).toBe("value1");

        kernel.join(delta);

        expect(kernel["dotValues"].size).toBe(1);
        expect(kernel["dotValues"].get([...kernel["dotValues"].keys()][0])).toBe("value1");
    });

    test("should remove a dot", () => {
        const dot = kernel.dotAdd("node1", "value1");
        const delta = kernel.removeDot(dot);

        expect(kernel["dotValues"].size).toBe(0);
        expect(delta.getContext().knows(dot)).toBe(true);

        const clone = kernel.clone();
        clone.join(delta);

        expect(clone["dotValues"].size).toBe(0);
    });

    test("should not remove a non-existent dot", () => {
        kernel.dotAdd("node1", "value1");
        const dot = new Dot("node2", 1);

        const delta = kernel.removeDot(dot);

        expect(delta["dotValues"].size).toBe(0);
        expect(delta.getContext().knows(dot)).toBe(false);
    });

    test("should remove all dots with a specific value", () => {
        kernel.dotAdd("node1", "value1");
        kernel.dotAdd("node2", "value2");
        kernel.dotAdd("node3", "value1");

        const delta = kernel.removeValue("value1");

        expect(kernel["dotValues"].size).toBe(1);
        expect(kernel["dotValues"].has(new Dot("node1", 1).toKey())).toBe(false);
        expect(kernel["dotValues"].has(new Dot("node3", 1).toKey())).toBe(false);
        expect(kernel["dotValues"].get(new Dot("node2", 1).toKey())).toBe("value2");
    });

    test("should not remove a value that does not exist", () => {
        kernel.dotAdd("node1", "value1");

        const delta = kernel.removeValue("value2");

        expect(delta["dotValues"].size).toBe(0);
        expect(kernel["dotValues"].size).toBe(1);
    });

    test("should reset the kernel", () => {
        kernel.dotAdd("node1", "value1");
        kernel.dotAdd("node2", "value2");

        const delta = kernel.reset();

        expect(kernel["dotValues"].size).toBe(0);
        expect(delta.getContext().knows(new Dot("node1", 1))).toBe(true);
        expect(delta.getContext().knows(new Dot("node2", 1))).toBe(true);
    });

    test("should reset an empty kernel", () => {
        const delta = kernel.reset();

        expect(delta["dotValues"].size).toBe(0);
    });

    test("should join two kernels", () => {
        kernel.dotAdd("node1", "value1");
        kernel.dotAdd("node2", "value2");

        const otherKernel = new DotKernel<string>();
        otherKernel.dotAdd("node2", "new_value2");
        otherKernel.dotAdd("node3", "value3");

        kernel.join(otherKernel);

        expect(kernel["dotValues"].size).toBe(3);
        expect(kernel["dotValues"].get(new Dot("node1", 1).toKey())).toBe("value1");
        expect(kernel["dotValues"].get(new Dot("node2", 1).toKey())).toBe("value2");
        expect(kernel["dotValues"].get(new Dot("node3", 1).toKey())).toBe("value3");
    });

    test("should join two kernels with concurrent updates", () => {
        const kernel1 = new DotKernel<string>();
        kernel1.dotAdd("node1", "value1");
        kernel1.dotAdd("node2", "value2");

        const kernel2 = new DotKernel<string>();
        kernel2.dotAdd("node1", "value3");
        kernel2.dotAdd("node2", "value4");

        kernel1.join(kernel2);

        expect(kernel1["dotValues"].size).toBe(2);
        expect(kernel1["dotValues"].get(new Dot("node1", 1).toKey())).toBe("value1"); // Prefers its own value
        expect(kernel1["dotValues"].get(new Dot("node2", 1).toKey())).toBe("value2");
    });

    test("should join with an empty kernel", () => {
        const kernel1 = new DotKernel<string>();
        kernel1.dotAdd("node1", "value1");

        const kernel2 = new DotKernel<string>();

        kernel1.join(kernel2);

        expect(kernel1["dotValues"].size).toBe(1);
        expect(kernel1["dotValues"].get(new Dot("node1", 1).toKey())).toBe("value1");
    });

    test("should ensure join is idempotent", () => {
        kernel.dotAdd("node1", "value1");
        kernel.dotAdd("node2", "value2");

        kernel.join(kernel);

        expect(kernel["dotValues"].size).toBe(2);
        expect(kernel["dotValues"].get(new Dot("node1", 1).toKey())).toBe("value1");
        expect(kernel["dotValues"].get(new Dot("node2", 1).toKey())).toBe("value2");
    });

    test("should ensure join is commutative", () => {
        const kernel1 = new DotKernel<string>();
        kernel1.dotAdd("node1", "value1");

        const kernel2 = new DotKernel<string>();
        kernel2.dotAdd("node2", "value2");

        const clone1 = kernel1.clone();
        const clone2 = kernel2.clone();

        clone1.join(kernel2);
        clone2.join(kernel1);

        expect(clone1["dotValues"]).toEqual(clone2["dotValues"]);
    });

    test("should ensure join is independent", () => {
        const kernel1 = new DotKernel<string>();
        kernel1.dotAdd("node1", "value1");

        const kernel2 = new DotKernel<string>();
        kernel2.dotAdd("node2", "value2");

        kernel1.join(kernel2);

        kernel2.dotAdd("node3", "value3");

        expect(kernel1["dotValues"].size).toBe(2);
        expect(kernel1["dotValues"].has(new Dot("node3", 1).toKey())).toBe(false);
    });

    test("should clone a kernel", () => {
        kernel.dotAdd("node1", "value1");
        kernel.dotAdd("node2", "value2");

        const clone = kernel.clone();

        expect(clone["dotValues"]).toEqual(kernel["dotValues"]);

        clone.dotAdd("node3", "value3");

        expect(kernel["dotValues"].size).toBe(2);
        expect(clone["dotValues"].size).toBe(3);
    });
});