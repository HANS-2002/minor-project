"use client"
import Gallery from "react-photo-gallery";
export default function RenderGallery(props) {
    return (
        <div>
        <Gallery photos={props.photos} direction={"column"} columns='3' />
        </div>
    );
}