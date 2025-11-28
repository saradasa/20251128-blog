"use client"

import { useEffect } from "react"
import { useState } from "react"

export default function Weather() {
    const [weather, setWeather] = useState(null)
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        // 例：東京
        const lat = 35.6895
        const lon = 139.6917

        async function fetchWeather() {
            try {
                const res = await fetch(
                    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
                )
                if (!res.ok) throw new Error('weather fetch failed')
                const data = await res.json()
                setWeather(data.current_weather)
            } catch (e) {
                console.error(e)
                setError(e.message)
            } finally {
                setLoading(false)
            }
        }
        fetchWeather()
    }, [])

    if (loading) return <div>天気を読み込み中…</div>
    if (error) return <div>天気情報を取得できません: {error}</div>
    if (!weather) return null

    return (
        <div>
            <div>気温: {weather.temperature} ℃</div>
            <div>風速: {weather.windspeed} m/s</div>
            <div>観測時刻: {new Date(weather.time).toLocaleString()}</div>
        </div>
    )
}