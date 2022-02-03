const { eat_ghost, lose, score, win } = require('./main')

describe('eat_ghost', () => {
    test('ghost gets eaten', () => {
        expect(eat_ghost(true, true)).toBe(true);
    })

    test('ghost does not get eaten because no power pellet active', () => {
        expect(eat_ghost(false, true)).toBe(false);
    })

    test('ghost doues not get eaten because not touching ghost', () => {
        expect(eat_ghost(true, false)).toBe(false);
    })
})

describe('score', () => {
    test('score when eating dot', () => {
        expect(score(false, true)).toBe(true);
    })

    test('no score when nothing eaten', () => {
        expect(score(false, false)).toBe(false);
    })

    test('score when eating power pellet', () => {
        expect(score(true, false)).toBe(true);
    })
})

describe('lose', () => {
    test('lose if touching a ghost witout a power pellet active', () => {
        expect(lose(false, true)).toBe(true);
    })

    test("don't lose if touching a ghost with a power pellet active", () => {
        expect(lose(true, true)).toBe(false);
    })

    test("don't lose if not touching a ghost", () => {
        expect(lose(true, false)).toBe(false);
    })
})

describe('win', () => {
    test('win if all dots eaten', () => {
        expect(win(true, false, false)).toBe(true);
    })

    test("don't win if all dots eaten, but touching a ghost", () => {
        expect(win(true, false, true)).toBe(false);
    })

    test("win if all dots eaten and touching a ghost with a power pellet active", () => {
        expect(win(true, true, true)).toBe(true);
    })
})
