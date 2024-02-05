'use strict';


/**
 * 
 * @param {number} winnerRating 
 * @param {number} loserRating 
 * @returns 
 */
function calculateRating (winnerRating, loserRating) {
    if (typeof winnerRating !== 'number' || typeof loserRating !== 'number') {
        console.log('Unknown information')
        return;
    }
    if (winnerRating < 0 || loserRating < 0){
        console.log('Rating can not be less than 0')
        return;
    }
    console.log('===================================================')
    console.log(`Rating first player: ${winnerRating} and second player: ${loserRating}`)
    console.log('===================================================')
    let ratingDifference = winnerRating - loserRating;
    if (ratingDifference >= 0 && ratingDifference <= 2) {
        winnerRating += 2
        console.log(`You have won. Now your rating has achieved +2. Rating ${winnerRating}`)
    }else if (ratingDifference >= 2 && ratingDifference <= 20) {
        winnerRating += 1
        console.log(`You have won. Now your rating has achieved +1. Rating ${winnerRating}`)
    }
    if (winnerRating === 0) {
        winnerRating += loserRating;
        console.log(`You have achieved rating: ${loserRating}`)
    }
    if (ratingDifference >= 20) {
        console.log('You have won, but your rating still the same.')
    }
    if (loserRating - winnerRating >= 10) {
        let formule = (loserRating - winnerRating + 5) / 3
        winnerRating += formule
        console.log(`You have won a strong enemie! You have achieved +${formule.toFixed(0)}`)
    }else if (loserRating - winnerRating >= 9) {
        winnerRating += 5
        console.log(`You have won an enemie. You have achieved +5.`)
    }
    console.log('===================================================')
    console.log(`Winner rating: ${winnerRating.toFixed(0)} and loser rating: ${loserRating}`);
};

calculateRating(2, 35)