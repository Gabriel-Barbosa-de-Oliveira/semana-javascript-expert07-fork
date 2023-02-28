function supportsWorkerType() {
    let supports = false;
    const tester = {
        get type() {
            supports = true;
        }
    }

    try {
        new Worker("blob://", tester).terminate(); //Mata a instancia assim que é executada
    } finally { //ignora o catch para n gerar erro. Apenas retorna com o finally se tem suporte ou não
        return supports;
    }
}

function prepareRunChecker({ timerDelay }) {
    let lastEvent = Date.now()
    return {
        shouldRun() {
            const result = (Date.now() - lastEvent) > timerDelay;
            if(result) lastEvent = Date.now()

            return result
        }
    }
}


export {
    supportsWorkerType,
    prepareRunChecker
}