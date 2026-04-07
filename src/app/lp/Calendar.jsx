"use client"

import Script from "next/script"

export default function Calendar() {
  return (
    <section
      id="calendar"
      className="w-full pt-15 sm:pb-25 bg-[#F7F7F7] px-4"
    >
      <div className="max-w-5xl mx-auto">

        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/becleancars"
          style={{ minWidth: "320px", height: "700px" }}
        />

        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />

      </div>
    </section>
  )
}