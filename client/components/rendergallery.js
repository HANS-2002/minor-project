"use client"
// import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import RenderGallery from "./gallery";

const srcURL = "https://source.unsplash.com/";

export default ({ page }) => {
    const dataFetchedRef = useRef(false);
    const [pageData, setPageData] = useState([]);

    useEffect(() => {
        if (dataFetchedRef.current) return;
        dataFetchedRef.current = true;
        axios.get("/api/loadhome?page=" + page).then(function (res) {
            setPageData(res.data.data)
        });
    }, []);

    console.log('pageData:', pageData)


    return (
        <div className="Photos">
            <h1 className="Inter.className">Page {page}</h1>
            {pageData[0] && <RenderGallery photos={
                pageData.map((data) => {
                    const width = 500;
                    const height = (data.height / data.width) * width;
                    return {
                        src: srcURL + data.id,
                        width: width,
                        height: height,
                    }
                })
            } />}
        </div>
    )
}