// Реализуйте функцию makeTurn(), которая принимает строку left или right и перемещает черепашку вперед-назад
// по одномерной карте длиной пять. Если ход невозможен, должно выброситься исключение.

type Turtle = 'turtle' | null;

type Game = {
    makeTurn: (direction: 'left' | 'right') => void;
    state: Array<Turtle>;
};

const startGame = (): Game => {
    const state: Array<Turtle> = ['turtle', null, null, null, null];


    // BEGIN (write your solution here)
    const actualPos = state.indexOf('turtle');
    type move = 'left' | 'right';
    function  makeTurn(dir: move){
        const dispatcher = {
            'right': function(){
                if (actualPos+1 >= state.length){
                    throw new Error('Вправо всё');
                }
                state[actualPos] = null;
                state[actualPos+1] = 'turtle';
            },
            'left': function(){
                if (actualPos-1 < 0){
                    throw new Error('Влево всё');
                }
                state[actualPos] = null;
                state[actualPos-1] = 'turtle';
            }
        }
        dispatcher[dir]();

    }
    // END

    return { makeTurn, state };
};

export default startGame;

const { makeTurn, state } = startGame();
console.log(state); // ['turtle', null, null, null, null]
makeTurn('right')
makeTurn('left') // ERROR

;
makeTurn('right');
console.log(state); // [null, null, 'turtle', null, null]