import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/analytics'
import { HACKATHONS, INTERNAL_WEBSITES, CMS } from '@constants/utilities'

if (!firebase.apps.length) {
  const config = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  }
  console.log(config)
  firebase.initializeApp(config)
}

const db = firebase.firestore()

const fireDb = {
  getCollection: async (hackathon, collection) => {
    let ref, data
    if (collection.toUpperCase() === 'FAQ') {
      ref = db.collection('FAQ').where('hackathonIDs', 'array-contains', hackathon)
    } else {
      ref = db.collection(HACKATHONS).doc(hackathon).collection(collection)
    }
    data = await ref.get()
    data = data.docs.map(doc => doc.data())
    return data
  },
  getWebsiteData: async hackathon => {
    const ref = db.collection(HACKATHONS).doc(hackathon)
    const data = await ref.get()
    return data.data()
  },
  getTargetedHackathon: async () => {
    const ref = db.collection(INTERNAL_WEBSITES).doc(CMS)
    const data = await ref.get()
    const { targetSite } = data.data()
    return targetSite
  },
}

export default fireDb
