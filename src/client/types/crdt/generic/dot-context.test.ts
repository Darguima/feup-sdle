import Dot from "./dot";
import DotContext from "./dot-context";

describe("DotContext", () => {
    let context: DotContext;

    beforeEach(() => {
        context = new DotContext();
    });

    test("should create a new DotContext", () => {
        expect(context).toBeDefined();
        expect(context["versionVector"].size).toBe(0);
        expect(context["dots"].size).toBe(0);
    });

    test("should create a new Dot", () => {
        const dot = context.makeDot("node1");
        expect(dot.id).toBe("node1");
        expect(dot.seq).toBe(1);

        const dot2 = context.makeDot("node1");
        expect(dot2.seq).toBe(2);
    });

    test("should compact dots into the version vector", () => {
        const dot1 = new Dot("node1", 1);
        const dot2 = new Dot("node1", 2);

        context.insertDot(dot1, false);
        context.insertDot(dot2, false);

        context.compact();

        expect(context["versionVector"].get("node1")).toBe(2);
        expect(context["dots"].size).toBe(0);
    });

    test("should join two DotContexts", () => {
        const otherContext = new DotContext();

        const dot1 = new Dot("node1", 1);
        const dot2 = new Dot("node2", 2);

        context.insertDot(dot1);
        otherContext.insertDot(dot2);

        context.join(otherContext);

        expect(context.knows(dot1)).toBe(true);
        expect(context.knows(dot2)).toBe(true);
    });

    test("should clone a DotContext", () => {
        const dot = new Dot("node1", 1);
        context.insertDot(dot);

        const clonedContext = context.clone();

        expect(clonedContext.knows(dot)).toBe(true);
        expect(clonedContext).not.toBe(context); // Ensure it's a deep copy
    });

    test("should copy another DotContext", () => {
        const otherContext = new DotContext();
        const dot = new Dot("node1", 1);
        otherContext.insertDot(dot);

        context.copy(otherContext);

        expect(context.knows(dot)).toBe(true);
        expect(context).not.toBe(otherContext); // Ensure it's a deep copy
    });

    test("should handle concurrent updates", () => {
        const otherContext = new DotContext();

        context.insertDot(new Dot("node1", 1));
        context.insertDot(new Dot("node2", 2));

        otherContext.insertDot(new Dot("node1", 2));
        otherContext.insertDot(new Dot("node2", 1));

        context.join(otherContext);

        expect(context.knows(new Dot("node1", 2))).toBe(true);
        expect(context.knows(new Dot("node2", 2))).toBe(true);
    });

    test("should handle overlapping contexts", () => {
        const otherContext = new DotContext();

        context.insertDot(new Dot("node1", 1));
        context.insertDot(new Dot("node1", 2));
        otherContext.insertDot(new Dot("node1", 2));
        otherContext.insertDot(new Dot("node1", 3));

        context.join(otherContext);

        expect(context.knows(new Dot("node1", 3))).toBe(true);
        expect(context["dots"].size).toBe(0);
    });

    test("should handle empty join", () => {
        const otherContext = new DotContext();

        context.insertDot(new Dot("node1", 1));

        context.join(otherContext);

        expect(context.knows(new Dot("node1", 1))).toBe(true);
        expect(context["dots"].size).toBe(0);
    });

    test("should handle join with gaps", () => {
        const otherContext = new DotContext();

        context.insertDot(new Dot("node1", 1));
        otherContext.insertDot(new Dot("node1", 3));

        context.join(otherContext);

        expect(context.knows(new Dot("node1", 1))).toBe(true);
        expect(context.knows(new Dot("node1", 2))).toBe(false);
        expect(context.knows(new Dot("node1", 3))).toBe(true);

        otherContext.insertDot(new Dot("node1", 2));
        context.join(otherContext);

        expect(context.knows(new Dot("node1", 2))).toBe(true);
        expect(context.knows(new Dot("node1", 3))).toBe(true);
    });

    test("should ensure join is idempotent", () => {
        context.insertDot(new Dot("node1", 1));
        context.join(context);

        expect(context.knows(new Dot("node1", 1))).toBe(true);
        expect(context.knows(new Dot("node1", 2))).toBe(false);
        expect(context["dots"].size).toBe(0);
    });

    test("should ensure join is commutative", () => {
        const otherContext = new DotContext();

        context.insertDot(new Dot("node1", 1));
        otherContext.insertDot(new Dot("node1", 2));

        const contextCopy = context.clone();
        const otherContextCopy = otherContext.clone();

        context.join(otherContext);
        otherContextCopy.join(contextCopy);

        expect(context["versionVector"]).toEqual(otherContextCopy["versionVector"]);
        expect(context["dots"]).toEqual(otherContextCopy["dots"]);
    });

    test("should ensure clone is independent", () => {
        context.insertDot(new Dot("node1", 1));

        const clone = context.clone();
        clone.insertDot(new Dot("node1", 2));

        expect(context.knows(new Dot("node1", 2))).toBe(false);
        expect(clone.knows(new Dot("node1", 2))).toBe(true);
    });

        test("should compact dots", () => {
        context.insertDot(new Dot("node1", 1), false);
        context.compact();

        context.compact(); // Compact again to ensure idempotence

        expect(context["versionVector"].get("node1")).toBe(1);
        expect(context["dots"].size).toBe(0);
    });

    test("should compact dots", () => {
        context.insertDot(new Dot("node1", 1), false);
        context.compact();

        expect(context["versionVector"].get("node1")).toBe(1);
        expect(context["versionVector"].has("node2")).toBe(false);
        expect(context["dots"].size).toBe(0);

        context.insertDot(new Dot("node2", 1), false);
        context.compact();

        expect(context["versionVector"].get("node1")).toBe(1);
        expect(context["versionVector"].get("node2")).toBe(1);
        expect(context["dots"].size).toBe(0);
    });

    test("should compact dots", () => {
        context.insertDot(new Dot("node1", 2), false);
        context.compact();

        expect(context["versionVector"].has("node1")).toBe(false);
        expect(context["dots"].size).toBe(1);

        context.insertDot(new Dot("node1", 1), false);
        context.compact();

        expect(context["versionVector"].get("node1")).toBe(2);
        expect(context["dots"].size).toBe(0);
    });

    test("should compact complex cases", () => {
        context.insertDot(new Dot("node1", 1));
        context.insertDot(new Dot("node2", 1));
        context.insertDot(new Dot("node2", 3));
        context.compact();

        expect(context.knows(new Dot("node1", 1))).toBe(true);
        expect(context.knows(new Dot("node2", 1))).toBe(true);
        expect(context.knows(new Dot("node1", 2))).toBe(false);
        expect(context.knows(new Dot("node2", 3))).toBe(true);
        expect(context.knows(new Dot("node2", 2))).toBe(false);

        context.insertDot(new Dot("node2", 2));
        context.compact();

        expect(context.knows(new Dot("node2", 2))).toBe(true);
        expect(context.knows(new Dot("node2", 3))).toBe(true);
    });

    test("should insert a dot", () => {
        const dot = new Dot("node1", 1);
        context.insertDot(dot);

        expect(context["versionVector"].has("node1")).toBe(true);
        expect(context["versionVector"].get("node1")).toBe(1);
    });

    test('should ensure that modifying a clone does not affect the original DotContext', () => {
        const ctx = new DotContext();
        ctx.insertDot(new Dot('node1', 1));

        const clone = ctx.clone();
        clone.insertDot(new Dot('node1', 2));

        // Verify that the original context does not know about the new dot
        expect(ctx.knows(new Dot('node1', 2))).toBe(false);

        // Verify that the clone knows about the new dot
        expect(clone.knows(new Dot('node1', 2))).toBe(true);
    });
});
