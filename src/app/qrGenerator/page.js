"use client";
import React, { useState } from "react";
import Reactqr from "react-qr-code";
import QR from "qrcode";
import Image from "next/image";
import { PiShareFat } from "react-icons/pi";

export default function QRGenerator() {
  const size = [128, 256, 512, 1024, 2048];
  const [sliderValue, setSliderValue] = useState(1);

  const [tab, setTab] = useState("text");

  const [text, setText] = useState("");

  const [ssid, setSSID] = useState("");
  const [password, setPassword] = useState("");
  const [security, setSecurity] = useState("WPA");
  function escapeWiFi(value) {
    return value
      .replace(/\\/g, "\\\\")
      .replace(/;/g, "\\;")
      .replace(/,/g, "\\,")
      .replace(/:/g, "\\:");
  }

  const wifiQR =
    security === "nopass"
      ? `WIFI:S:${escapeWiFi(ssid)};T:nopass;;`
      : `WIFI:S:${escapeWiFi(ssid)};T:${security};P:${escapeWiFi(password)};;`;

  const qrValue = tab === "wifi" ? wifiQR : text;

  async function handleDownload() {
    try {
      // Generate QR as image URL
      const qrDataURL = await QR.toDataURL(qrValue, {
        width: size[size.length - 2],
      });

      // create download link
      const link = document.createElement("a");
      link.href = qrDataURL;
      link.download = "qr-code.png";

      // trigger download
      link.click();
    } catch (e) {
      console.log(e);
    }
  }

  async function handlePrint() {
    try {
      // Generate QR image
      const qrDataURL = await QR.toDataURL(qrValue, {
        width: size[size.length - 2],
      });

      // Open new window
      const win = window.open("");

      // Add HTML
      win.document.write(`
      <html>
        <body
          style="
            display:flex;
            justify-content:center;
            align-items:center;
            height:100vh;
          "
        >
          <img id="qr" src="${qrDataURL}" />
        </body>
      </html>
    `);

      // Finish loading
      win.document.close();

      // wait for img loading
      const img = win.document.getElementById("qr");
      img.onload = () => {
        win.print();
      };
    } catch (e) {
      console.log(e);
    }
  }

  async function handleShare() {
    try {
      // Generate QR image
      const qrDataURL = await QR.toDataURL(qrValue, {
        width: size[2],
      });

      const res = await fetch(qrDataURL);
      const blob = await res.blob();

      const file = new File([blob], "qr-code.png", {
        type: "image/png",
      });

      await navigator.share({
        title: "qr-code",
        text: "here is your qr code",
        files: [file],
      });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-gray-100 to-gray-300 p-6">
      <div className="w-full max-w-md rounded-3xl border border-white/40 bg-white/80 p-8 shadow-2xl backdrop-blur-xl">
        {/* Heading */}
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            QR Generator
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Generate, download, print & share QR codes
          </p>
        </div>

        {/* Input */}
        {/* Tabs */}
        <div className="mb-6 grid grid-cols-2 rounded-2xl bg-gray-200 p-1">
          <button
            onClick={() => setTab("text")}
            className={`
      rounded-xl py-2 text-sm font-medium transition-all
      ${tab === "text" ? "bg-white shadow text-black" : "text-gray-600"}
    `}
          >
            Text / URL
          </button>

          <button
            onClick={() => setTab("wifi")}
            className={`
      rounded-xl py-2 text-sm font-medium transition-all
      ${tab === "wifi" ? "bg-white shadow text-black" : "text-gray-600"}
    `}
          >
            WiFi
          </button>
        </div>

        {/* TEXT TAB */}
        {tab === "text" && (
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Text or URL
            </label>

            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              type="text"
              placeholder="https://example.com"
              className="
        w-full rounded-2xl border border-gray-300
        bg-white px-4 py-3 text-sm
        outline-none transition-all
        focus:border-black focus:ring-4 focus:ring-gray-200
      "
            />
          </div>
        )}

        {/* WIFI TAB */}
        {tab === "wifi" && (
          <div className="space-y-4">
            {/* WiFi Name */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                WiFi Name
              </label>

              <input
                value={ssid}
                onChange={(e) => setSSID(e.target.value)}
                type="text"
                placeholder="JioFiber"
                className="
          w-full rounded-2xl border border-gray-300
          bg-white px-4 py-3 text-sm
          outline-none transition-all
          focus:border-black focus:ring-4 focus:ring-gray-200
        "
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Password
              </label>

              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Enter password"
                className="
          w-full rounded-2xl border border-gray-300
          bg-white px-4 py-3 text-sm
          outline-none transition-all
          focus:border-black focus:ring-4 focus:ring-gray-200
        "
              />
            </div>

            {/* Security */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Security
              </label>

              <select
                value={security}
                onChange={(e) => setSecurity(e.target.value)}
                className="
          w-full rounded-2xl border border-gray-300
          bg-white px-4 py-3 text-sm
          outline-none transition-all
          focus:border-black focus:ring-4 focus:ring-gray-200
        "
              >
                <option value="WPA">WPA/WPA2</option>
                <option value="WEP">WEP</option>
                <option value="nopass">Open Network</option>
              </select>
            </div>
          </div>
        )}

        {/* QR Preview */}
        {qrValue && (
          <div className="mt-8 flex flex-col items-center">
            <div
              className="
              rounded-3xl border border-gray-200
              bg-white p-6 shadow-inner
            "
            >
              <Reactqr
                value={qrValue}
                size={Math.min(size[sliderValue], 280)}
              />
            </div>

            <p className="mt-3 text-sm text-gray-500">{size[sliderValue]}px</p>
          </div>
        )}

        {/* Slider */}
        <div className="mt-8">
          <div className="mb-2 flex items-center justify-between text-sm text-gray-600">
            <span>Size</span>
            <span>{size[sliderValue]} px</span>
          </div>

          <input
            className="
            h-2 w-full cursor-pointer appearance-none
            rounded-lg bg-gray-200
          "
            type="range"
            min={0}
            max={2}
            value={sliderValue}
            step={1}
            onChange={(e) => {
              setSliderValue(Number(e.target.value));
            }}
          />
        </div>

        {/* Buttons */}
        <div className="mt-8 grid grid-cols-2 gap-3">
          <button
            onClick={() => setText("")}
            className="
            rounded-2xl border border-gray-300
            bg-white px-4 py-3 text-sm font-medium
            transition-all hover:scale-[1.02]
            hover:bg-gray-100
          "
          >
            Reset
          </button>

          <button
            onClick={handleDownload}
            className="
            rounded-2xl bg-black px-4 py-3
            text-sm font-medium text-white
            transition-all hover:scale-[1.02]
            hover:bg-gray-800
          "
          >
            Download
          </button>

          <button
            onClick={handlePrint}
            className="
            rounded-2xl border border-gray-300
            bg-white px-4 py-3 text-sm font-medium
            transition-all hover:scale-[1.02]
            hover:bg-gray-100
          "
          >
            Print
          </button>

          <button
            onClick={handleShare}
            className="
            flex items-center justify-center
            rounded-2xl bg-black px-4 py-3
            text-white transition-all
            hover:scale-[1.02]
            hover:bg-gray-800
          "
          >
            <PiShareFat size={22} />
          </button>
        </div>

        {qrValue}
      </div>
    </div>
  );
}
