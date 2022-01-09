import matchesStore from "@/modules/matches/matches-store";
import accountsStore from "@/store/accounts-store";
import gameInfoStore from "@/store/game-info-store";


export default {
    modules: {
        matches: matchesStore,
        accounts: accountsStore,
        gameInfo: gameInfoStore
    }
}