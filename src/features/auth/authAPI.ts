import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";

type tProviders = {
    [key: string]: any
}

const providers : tProviders = {
    google: GoogleAuthProvider,
    facebook: FacebookAuthProvider
}

const signInWithThirdParty = async (providerName: string) => {
    const auth = getAuth();
    const provider = new providers[providerName]()
    return new Promise<any>((resolve) => {
        signInWithPopup(auth, provider).then(result => {
            return resolve(result)
        })
    })
}

export {
    signInWithThirdParty
}
