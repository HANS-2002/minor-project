import { app, rdb } from "@/lib/config";
import { getDatabase, ref, onValue } from "firebase/database";

export default async (req, res) => {
    try {
        // const q = query(collection(rdb, "home/0"));
        // const querySnapshot = await getDocs(q);
        // let queries = [];
        // querySnapshot.forEach((doc) => {
        //     // doc.data() is never undefined for query doc snapshots
        //     console.log(doc.id, " => ", doc.data());
        //     queries.push(doc.data());
        //     //   res.append(doc);
        // });
        let page = req.query.page

        const dataRef = ref(rdb, 'home');

        let returnValue = []

        for (let i = page * 30; i < (page + 1) * 30; i++) {
            const dataRef = ref(rdb, 'home/' + i);
            onValue(dataRef, snapshot => {
                const data = snapshot.val();
                returnValue.push({
                    id: data.id,
                    color: data.color,
                    width: data.width,
                    height: data.height,
                    blur_hash: data.blur_hash,
                })
            })
        }

        onValue(dataRef, snapshot => {
            const data = snapshot.val();
            res.status(200).send({ data: returnValue });
        })

        // res.status(200).send({ data: queries });
        // res.status(200).send({ querySnapshot })
    } catch (error) {
        console.log(error)
        res.status(500).send({ error: "failed to fetch" });
    }
}