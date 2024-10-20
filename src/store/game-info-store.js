import {localAuthRepository} from "@/main";

function emptyState() {
    return {
        loading: true,
        gameState: {
            "id": null,
            "deckRemaining": null,
            "player": null,
            "isPlayerTurn": false,
            "hand": [],
            "playAreas": {
                "ttesterson": {"board": {"YELLOW": [], "WHITE": [], "BLUE": [], "GREEN": [], "RED": []}},
                "dnelson": {"board": {"YELLOW": [], "WHITE": [], "BLUE": [], "GREEN": [], "RED": []}}
            },
            "discard": {
                "board": {"YELLOW": [], "WHITE": [], "BLUE": [], "GREEN": [], "RED": []}
            },
            log: []
        },

        turnCommands: {
            playOrDiscard: null,
            draw: null
        }
    }
}

function addToHand(state, card) {
    state.gameState.hand.push(card)
}

function removeFromHand(state, card) {
    state.gameState.hand = state.gameState.hand.filter(handCard => handCard.id !== card.id)
}

function playCard(state, card) {
    state.gameState.playAreas[state.gameState.player].board[card.color].push(card)
}

function undoPlayCard(state, card) {
    state.gameState.playAreas[state.gameState.player].board[card.color] =
        state.gameState.playAreas[state.gameState.player].board[card.color]
            .filter(boardCard => boardCard.id !== card.id)
}

function undoDiscardCard(state, card) {
    state.gameState.discard.board[card.color] =
        state.gameState.discard.board[card.color]
            .filter(boardCard => boardCard.id !== card.id)
}

const getters = {
    log(state) {
        return state.gameState.log
    },
    canPlayOrDiscard(state) {
        return state.gameState.isPlayerTurn && state.turnCommands.playOrDiscard === null
    },
    canDraw(state) {
        return state.gameState.isPlayerTurn &&
            state.turnCommands.playOrDiscard !== null &&
            state.turnCommands.draw === null;
    },
    canSendTurnCommands(state) {
        return state.turnCommands.playOrDiscard !== null &&
            state.turnCommands.draw !== null;
    },
    deckRemaining(state) {
        return state.gameState.deckRemaining
    },
    playerName() {
        return localAuthRepository.get()['login']
    },
    opponentName(state) {
        return Object.keys(state.gameState.playAreas)
            .filter((username) => username !== getters.playerName() )[0]
    },
    activePlayer(state) {
        if(state.gameState.isPlayerTurn) {
            return getters.playerName(state)
        } else {
            return getters.opponentName(state)
        }
    },
    isPlayerTurn(state) {
        return state.gameState.isPlayerTurn
    },
    hand(state) {
        return state.gameState.hand
    },
    playAreas(state) {
        return state.gameState.playAreas
    },

    playerArea(state) {
        return state.gameState.playAreas[state.currentPlayer].board
    },
    opponentArea(state) {
        return state.gameState.playAreas[getters.opponentName(state)].board
    },
    discard(state) {
        return state.gameState.discard.board
    },
    turnCommands(state) {
        return state.turnCommands
    },
    loading(state) {
        return state.loading
    },
    canUndo(state) {
        return state.turnCommands.playOrDiscard !== null || state.turnCommands.draw !== null
    }
}

const mutations = {
    RESET_STATE(state) {
        Object.assign(state, emptyState())
    },
    MERGE_GAME(state, gameState) {
        Object.assign(state.gameState, gameState)
    },
    START_LOADING(state) {
        state.loading = true;
    },
    DONE_LOADING(state) {
        state.loading = false;
    },
    PLAY(state, command) {
        state.turnCommands.playOrDiscard = command;
        removeFromHand(state, command.card);
        playCard(state, command.card);
    },
    DISCARD(state, command) {
        state.turnCommands.playOrDiscard = command;
        removeFromHand(state, command.card)
    },
    DRAW(state, command) {
        state.turnCommands.draw = command;
    },
    UNDO(state) {
        if(state.turnCommands.draw !== null) {
            state.turnCommands.draw = null

        } else {
            undoPlayCard(state, state.turnCommands.playOrDiscard.card)
            undoDiscardCard(state, state.turnCommands.playOrDiscard.card)
            addToHand(state, state.turnCommands.playOrDiscard.card)
            state.turnCommands.playOrDiscard = null
        }
    },
    'CLEAR_TURN_COMMANDS'(state) {
        state.turnCommands.draw = null
        state.turnCommands.playOrDiscard = null
    }
}

const actions = {
    reset({ commit }) {
        commit('CLEAR_TURN_COMMANDS')
        commit('RESET_STATE')
    },
    startLoading({ commit }) {
        commit('START_LOADING')
    },
    doneLoading({ commit }) {
        commit('DONE_LOADING')
    },
    mergeGame({ commit }, gameState) {
        commit('MERGE_GAME', gameState)
    },
    playCommand({ commit }, command) {
        commit('PLAY', command)
    },
    discardCommand({ commit }, command) {
        commit('DISCARD', command)
    },
    drawCommand({ commit }, command) {
        commit('DRAW', command)
    },
    undo({ commit }) {
        commit('UNDO')
    },
    clearTurnCommands({ commit }) {
        commit('CLEAR_COMMAND_TURN')
    }
}



export default {
    namespaced: true,
    state: emptyState(),
    getters,
    actions,
    mutations
}