import React from "react";
import Card from "../components/Card";
import $ from "jquery";

let store = "note";

export default function Home() {

    let [list, setList] = React.useState<string[]>([]);

    React.useEffect(
        function () {
            let data: string | null = window.localStorage.getItem(store);
            if (data && data !== '[]') setList(JSON.parse(data))
        }, [])

    React.useEffect(() => {
        window.localStorage.setItem(store, JSON.stringify(list))
    }, [list])

    function handler(e: any) {
        e.preventDefault();

        let content: string = $("#item").val() as string;
        if (content !== "") {
            setList([...list, content])
            $('#item').val("");
        }
    }

    return (
        <div className="container mt-2 mb-4">
            <h1 className="text-center mb-3">Notes</h1>
            <form className="form mb-4 d-flex justify-content-between" onSubmit={(e) => handler(e)}>
                <input defaultValue="" id="item" className="form-control p-2" type="text" placeholder="Add to List" />
                &nbsp;
                <button id="add" type="submit" className="btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="26" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                </button>
            </form>
            {
                list.map((val, idx) => <Card key={idx} content={val} id={idx.toString()} func={function () {
                    // $(`#${idx}`).remove();
                    // let items: string | null = window.localStorage.getItem(store);
                    // let item = JSON.parse(items || '[]');
                    // let sss = item.filter((value: string, index: number) => idx !== index)
                    // window.localStorage.setItem(store, JSON.stringify(sss));
                }} />)
            }
        </div>
    );
}