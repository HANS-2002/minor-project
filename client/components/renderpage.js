"use client"
import Image from "next/image";
import { useState, useEffect, useMemo } from "react";
import axios from "axios";

const srcURL = "https://source.unsplash.com/";

function Content(data) {
    const width = 500;
    const height = (data.data.height / data.data.width) * width;
    const ret = (
        <span className="image">
            <Image
                alt="imageData"
                src={`${srcURL}${data.data.id}/${width}x${height}`}
                width={width}
                height={height}
            />
            <a 
                className="download-button" 
                href={`${srcURL}${data.data.id}/${data.data.width}x${data.data.height}`}
            >
                <button>
                    <Image 
                        src='/downloading.png' 
                        alt='Download Button' 
                        width='20' 
                        height='20' 
                    />
                </button>
            </a>
        </span>
    )
    // console.log(ret)
    return ret
}

export default ({ page }) => {
    const [pageData, setPageData] = useState([]);

    useEffect(() => {
        axios.get("/api/loadhome?page=" + page).then(function (res) {
            setPageData(res.data.data)
        });
    }, []);

    console.log('pageData:', pageData)

    const ret = useMemo(() => (
        <>
            <h1 className="Inter.className">Page {page}</h1>
            {pageData && pageData.map((data) => {
                // console.log(data)
                return (
                    <div className='imagegroup'>
                        <Content data={data} key={data.id} />
                    </div>
                )
            })}
        </>
    ));
    console.log(ret)
    return ret
}