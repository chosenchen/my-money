import { useEffect, useState, useRef } from "react";
import {projectFirestore} from "../firebase/config";

export const useCollection =(collection, _query, _orderBy) => {
    const [documents, setDocuments] = useState(null)
    const [error, setError] = useState(null)

    //if we don't use a ref --> infinite look in useEffect
    // _query is an array and is "different" on every function call
    const query = useRef(_query).current; // when we wrap reference type in useRef, it doesn't see it as different on every component re-evaluation
    const orderBy = useRef(_orderBy).current

    useEffect(()=> {
        let ref = projectFirestore.collection(collection)

        if(query) {
            ref = ref.where(...query)
        }

        if(orderBy){
            ref = ref.orderBy(...orderBy)
        }
        const unsubscribe = ref.onSnapshot((snapshot) => {
            let results = [] 
            console.log(snapshot);
            snapshot.docs.forEach(doc=> {
                results.push({...doc.data(), id:doc.id})
            })

            console.log(results);

            //update state
            setDocuments(results);
            setError(null)
        }, (error) => {
            console.log(error);
            setError('could not fetch the data')
        })

        //unsubscribe on unmount
        return () => unsubscribe()
        
    }, [collection, query])

    return {documents, error}
}