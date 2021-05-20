import express from "express";

const gameServices = {
    activeGames : [],
    newGame : () => {
        return 'newGame';
    }
};


export default (app:express.Application ) => {
    app.get('/game/create', (req,res) => res.send(gameServices.newGame()));
}