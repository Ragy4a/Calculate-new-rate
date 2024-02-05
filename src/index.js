'use strict';


/**
 * 
 * @param {number} winnerRating - Рейтинг Победившего
 * @param {number} loserRating - Рейтинг проигравшего
 * @returns - возвращает ответы при неправильном вводе и также возвращает информцаию которую выдала функция.
 */
function calculateRating (winnerRating, loserRating) {
    let rateDifference = winnerRating - loserRating;
    if (typeof winnerRating !== 'number' || typeof loserRating !== 'number') {
        return 'Unknown information.'
    };
    if (winnerRating < 0 || loserRating < 0){
        return 'Rating can not be less than 0';
    };
    if (winnerRating === 0) {
        winnerRating += loserRating;
    }else if (rateDifference >= 0 && rateDifference <= 2) {
        winnerRating += 2;
    }else if (rateDifference > 2 && rateDifference < 20){
        winnerRating += 1;
    }else if (rateDifference >= 20) {
        winnerRating += 0;
    }else if (winnerRating < loserRating) {
        winnerRating += (loserRating - winnerRating + 5) / 3;
    };
    return `Winner rating: ${winnerRating.toFixed(1)}`;
};

console.log(calculateRating(41, 40))
