"use client"

import { useState, useEffect } from 'react'
import { Pantry } from '../components/component/pantry'
import { firestore } from '@/firebase'

function FirebaseInitializer({ children }) {
  const [isFirebaseReady, setIsFirebaseReady] = useState(false)

  useEffect(() => {
    if (firestore) {
      setIsFirebaseReady(true)
    }
  }, [])

  if (!isFirebaseReady) {
    return <div>Initializing Firebase...</div>
  }

  return children
}

export default function Home() {
  return (
    <FirebaseInitializer>
      <main>
        <Pantry />
      </main>
    </FirebaseInitializer>
  )
}