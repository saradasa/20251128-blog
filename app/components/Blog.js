"use client"

export default function Blog() {
    const mockList = [
        { id: "1", title: "サンプル記事1", contents: "内容1" },
        { id: "2", title: "サンプル記事2", contents: "内容2" }
    ]

    return (
        <>
            {mockList.map(p => (
                <li key={p.id}>
                    <p>{p.title}</p>
                    <p>{p.contents}</p>
                </li>
            )
            )
            }
        </>
    )
}