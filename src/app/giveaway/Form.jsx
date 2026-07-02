"use client"

import { useState } from "react"

export default function Form() {
  const giveawayDeadline = new Date("2026-07-11T03:59:00Z")
  const giveawayClosed = new Date() >= giveawayDeadline
  if (giveawayClosed) {
  return (
    <div
      id="giveaway-form"
      className="bg-black flex items-center justify-center px-4 py-16"
    >
      <div className="max-w-2xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Giveaway Closed
        </h2>

        <p className="text-gray-300 text-lg">
          Entries are no longer being accepted. Winners will be contacted
          directly and announced soon.
        </p>
      </div>
    </div>
  )
}

  const [step, setStep] = useState(1)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    zip: "",
    vehicle: "",
    damage: "",
    investment: "",
    smsOptIn: false,
  })

  const totalSteps = 7
  const progress = (step / totalSteps) * 100

  const nextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1)
    }
  }

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const updateField = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    })
  }

  return (
    <div id="giveaway-form" className="bg-black flex items-start justify-center px-4 py-8">
    <div className="w-full max-w-3xl p-8 md:p-12">
      {/* Progress Bar */}
      <div className="w-full bg-gray-300 rounded-full h-3 mb-12">
        <div
          className="bg-[#43BDD5] h-3 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <form
        action="https://formspree.io/f/xdavakzd"
        method="POST"
      >
          <input type="hidden" name="Name" value={formData.name} />
          <input type="hidden" name="Email" value={formData.email} />
          <input type="hidden" name="Phone" value={formData.phone} />
          <input type="hidden" name="ZIP" value={formData.zip} />
          <input type="hidden" name="Vehicle" value={formData.vehicle} />
          <input type="hidden" name="Vehicle Condition" value={formData.damage} />
          <input type="hidden" name="Investment Readiness" value={formData.investment} />
          <input type="hidden" name="Marketing Call/SMS Opt-In" value={formData.smsOptIn ? "Yes" : "No"} />
        {/* STEP 1 */}
        {step === 1 && (
          <div className="space-y-10">
            <h2 className="text-4xl text-white md:text-5xl font-light">
              What is your <span className="font-bold">name</span>?
            </h2>

            <input
              type="text"
              name="Name"
              placeholder="NAME"
              value={formData.name}
              onChange={(e) =>
                updateField("name", e.target.value)
              }
              className="w-full rounded-2xl border border-gray-300 bg-gray-100 px-6 py-5 text-xl"
              required
            />

            <button
              type="button"
              onClick={nextStep}
              disabled={!formData.name}
              className="w-full max-w-md mx-auto block h-16 rounded-full bg-[#43BDD5] text-white text-xl font-bold"
            >
              CONTINUE
            </button>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div className="space-y-10">
            <h2 className="text-4xl text-white md:text-5xl font-light">
              Where should I <span className="font-bold">email</span> it to?
            </h2>

            <input
              type="email"
              name="Email"
              placeholder="EMAIL ADDRESS"
              value={formData.email}
              onChange={(e) =>
                updateField("email", e.target.value)
              }
              className="w-full rounded-2xl border border-gray-300 bg-gray-100 px-6 py-5 text-xl"
              required
            />

            <button
              type="button"
              onClick={nextStep}
              disabled={!formData.email}
              className="w-full max-w-md mx-auto block h-16 rounded-full bg-[#43BDD5] text-white text-xl font-bold"
            >
              CONTINUE
            </button>

            <button
              type="button"
              onClick={prevStep}
              className="block mx-auto text-white"
            >
              ← Previous
            </button>
          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div className="space-y-10">
            <h2 className="text-4xl text-white md:text-5xl font-light">
              What should I <span className="font-bold">call</span> when you win?
            </h2>

            <input
              type="tel"
              name="Phone"
              placeholder="PHONE NUMBER"
              value={formData.phone}
              onChange={(e) =>
                updateField("phone", e.target.value)
              }
              className="w-full rounded-2xl border border-gray-300 bg-gray-100 px-6 py-5 text-xl"
              required
            />

            <label className="flex items-start gap-3 text-left text-gray-300 text-sm max-w-xl mx-auto cursor-pointer">
              <input
                type="checkbox"
                checked={formData.smsOptIn}
                onChange={(e) => updateField("smsOptIn", e.target.checked)}
                className="mt-1 h-5 w-5 shrink-0 accent-[#43BDD5]"
              />
              <span>
                By checking this box, I agree to receive marketing calls and text messages from
                Be Clean Solutions L.L.C. at the phone number provided, including by automated
                technology. Consent is not a condition of entry or purchase. Message and data
                rates may apply. Reply STOP to opt out of texts at any time, or tell us to stop
                calling and we will honor that request.
              </span>
            </label>

            <button
              type="button"
              onClick={nextStep}
              disabled={!formData.phone}
              className="w-full max-w-md mx-auto block h-16 rounded-full bg-[#43BDD5] text-white text-xl font-bold"
            >
              CONTINUE
            </button>

            <button
              type="button"
              onClick={prevStep}
              className="block mx-auto text-white"
            >
              ← Previous
            </button>
          </div>
        )}

        {step === 4 && (
  <div className="space-y-10">
    <h2 className="text-4xl text-white md:text-5xl font-light">
      What's your <span className="font-bold">ZIP code</span>?
    </h2>

    <input
      type="text"
      name="ZIP"
      placeholder="ZIP CODE"
      value={formData.zip}
      onChange={(e) =>
        updateField("zip", e.target.value)
      }
      className="w-full rounded-2xl border border-gray-300 bg-gray-100 px-6 py-5 text-xl"
      required
    />

    <button
      type="button"
      onClick={nextStep}
      disabled={!formData.zip}
      className="w-full max-w-md mx-auto block h-16 rounded-full bg-[#43BDD5] text-white text-xl font-bold"
    >
      CONTINUE
    </button>

    <button
      type="button"
      onClick={prevStep}
      className="block mx-auto text-white"
    >
      ← Previous
    </button>
  </div>
)}

        {/* STEP 5 */}
        {step === 5 && (
          <div className="space-y-10">
            <h2 className="text-4xl md:text-5xl font-light text-white">
              What <span className="font-bold">car</span> is getting ceramic coated?
            </h2>

            <input
              type="text"
              name="Vehicle"
              placeholder="YEAR MAKE MODEL"
              value={formData.vehicle}
              onChange={(e) =>
                updateField("vehicle", e.target.value)
              }
              className="w-full rounded-2xl border border-gray-300 bg-gray-100 px-6 py-5 text-xl"
              required
            />

            <button
              type="button"
              onClick={nextStep}
              disabled={!formData.vehicle}
              className="w-full max-w-md mx-auto block h-16 rounded-full bg-[#43BDD5] text-white text-xl font-bold"
            >
              CONTINUE
            </button>

            <button
              type="button"
              onClick={prevStep}
              className="block mx-auto text-white"
            >
              ← Previous
            </button>
          </div>
        )}

        {/* STEP 6 */}
        {step === 6 && (
          <div className="space-y-10">
            <h2 className="text-4xl text-white md:text-5xl font-light">
              Any major rust, peeling clear, or body damage?
            </h2>

            <input
              type="hidden"
              name="Vehicle Condition"
              value={formData.damage}
            />

            <div className="flex gap-4 justify-center">
              <button
                type="button"
                onClick={() => updateField("damage", "Yes")}
                className={`px-10 py-4 rounded-full border-2 ${
                  formData.damage === "Yes"
                    ? "bg-white text-black border-white"
                    : "bg-black text-white border-white"
                }`}
              >
                Yes
              </button>

              <button
                type="button"
                onClick={() => updateField("damage", "No")}
                className={`px-10 py-4 rounded-full border-2 ${
                  formData.damage === "No"
                    ? "bg-white text-black border-white"
                    : "bg-black text-white border-white"
                }`}
              >
                No
              </button>
            </div>

            <button
              type="button"
              onClick={nextStep}
              disabled={!formData.damage}
              className="w-full max-w-md mx-auto block h-16 rounded-full bg-[#43BDD5] text-white text-xl font-bold"
            >
              CONTINUE
            </button>

            <button
              type="button"
              onClick={prevStep}
              className="block mx-auto text-white"
            >
              ← Previous
            </button>
          </div>
        )}

        {/* STEP 7 */}
        {step === 7 && (
          <div className="space-y-10">
            <h2 className="text-4xl text-white md:text-5xl font-light">
              Are you willing to invest{" "}
              <span className="font-bold">$1,000+</span> to protect your finish?
            </h2>

            <div className="flex gap-4 justify-center">
              <button
                type="button"
                onClick={() => updateField("investment", "Yes")}
                className={`px-10 py-4 rounded-full border-2 ${
                  formData.investment === "Yes"
                    ? "bg-white text-black border-white"
                    : "bg-black text-white border-white"
                }`}
              >
                Yes
              </button>

              <button
                type="button"
                onClick={() => updateField("investment", "No")}
                className={`px-10 py-4 rounded-full border-2 ${
                  formData.investment === "No"
                    ? "bg-white text-black border-white"
                    : "bg-black text-white border-white"
                }`}
              >
                No
              </button>
            </div>

            <button
              type="submit"
              disabled={!formData.investment}
              className="w-full max-w-md mx-auto block h-16 rounded-full bg-[#43BDD5] text-white text-xl font-bold"
            >
              ENTER GIVEAWAY
            </button>

            <button
              type="button"
              onClick={prevStep}
              className="block mx-auto text-white"
            >
              ← Previous
            </button>
          </div>
        )}
      </form>
    </div>
    </div>
  )
}