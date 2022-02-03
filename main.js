function eat_ghost(power_pellet_active, touching_ghost) {
    if(power_pellet_active && touching_ghost){
        return true; 
    }
    return false;
}

function score(touching_power_pellet, touching_dot) {
    if(touching_power_pellet || touching_dot){
        return true;
    }
    return false; 
}

function lose(power_pellet_active, touching_ghost) {
    if(touching_ghost && !power_pellet_active){
        return true;
    }
    return false;
}

function win(has_eaten_all_dost, power_pellet_active, touching_ghost) {
    if(has_eaten_all_dost && !touching_ghost || power_pellet_active){
        return true;
    } 
    return false;
}

module.exports = {
    eat_ghost,
    score,
    lose,
    win,
}