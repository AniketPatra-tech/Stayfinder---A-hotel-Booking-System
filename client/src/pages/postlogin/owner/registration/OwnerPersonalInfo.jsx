
import React, { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  UserRound,
  Mail,
  Phone,
  CreditCard,
  Upload,
  ShieldCheck,
  ChevronDown,
  Check,
  Building2,
  User,
  Wallet,
  FileCheck,
  X,
  LockKeyhole,
  ImagePlus,
} from "lucide-react";

const OwnerPersonalInformation = ({
  email = "",
  initialData = {},
  onNext,
}) => {
  const [formData, setFormData] = useState({
    fullName: initialData.fullName || "",
    email: email || initialData.email || "",
    phone: initialData.phone || "",
    aadhaarNumber: initialData.aadhaarNumber || "",
    aadhaarDocument: initialData.aadhaarDocument || null,
    panNumber: initialData.panNumber || "",
    upiId: initialData.upiId || "",
    ownerType: initialData.ownerType || "individual",
  });

  const [errors, setErrors] = useState({});
  const [showOwnerTypes, setShowOwnerTypes] = useState(false);

  const fileInputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState("");

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      email: email || prev.email,
    }));
  }, [email]);

  useEffect(() => {
    if (!formData.aadhaarDocument) {
      setPreviewUrl("");
      return;
    }

    const url = URL.createObjectURL(formData.aadhaarDocument);
    setPreviewUrl(url);

    return () => URL.revokeObjectURL(url);
  }, [formData.aadhaarDocument]);

  const ownerTypes = [
    {
      value: "individual",
      label: "Individual",
      description: "Registering as an individual property owner",
      icon: User,
    },
    {
      value: "business",
      label: "Business",
      description: "Registering on behalf of a business",
      icon: Building2,
    },
  ];

  const selectedOwnerType = ownerTypes.find(
    (item) => item.value === formData.ownerType
  );

  const updateField = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setErrors((prev) => ({
        ...prev,
        aadhaarDocument: "Please upload an image file.",
      }));
      e.target.value = "";
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setErrors((prev) => ({
        ...prev,
        aadhaarDocument: "File size must be less than 5 MB.",
      }));
      e.target.value = "";
      return;
    }

    updateField("aadhaarDocument", file);
  };

  const removeDocument = () => {
    updateField("aadhaarDocument", null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    }

    if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit mobile number.";
    }

    if (!/^\d{12}$/.test(formData.aadhaarNumber)) {
      newErrors.aadhaarNumber = "Enter a valid 12-digit Aadhaar number.";
    }

    if (!formData.aadhaarDocument) {
      newErrors.aadhaarDocument = "Please upload your Aadhaar document.";
    }

    if (!/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(formData.panNumber)) {
      newErrors.panNumber = "Enter a valid PAN number.";
    }

    if (!/^[\w.-]+@[\w.-]+$/.test(formData.upiId)) {
      newErrors.upiId = "Enter a valid UPI ID.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    onNext?.(formData);
  };

  const inputClass = (field) => `
    w-full rounded-xl border bg-white px-4 py-3.5
    text-sm text-[#263D30] placeholder:text-[#9CA99E]
    outline-none transition-all duration-200
    hover:border-[#A9BFAE]
    focus:border-[#47745A] focus:ring-4 focus:ring-[#47745A]/10
    ${errors[field] ? "border-red-400" : "border-[#DFE8E0]"}
  `;

  const labelClass =
    "mb-2 block text-sm font-medium text-[#34483A]";

  const SectionHeading = ({ icon: Icon, title, subtitle }) => (
    <div className="mb-6 flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EDF4ED] text-[#315E46]">
        <Icon size={19} strokeWidth={1.8} />
      </div>

      <div>
        <h3 className="text-lg font-semibold text-[#263D30]">
          {title}
        </h3>
        <p className="mt-0.5 text-xs text-[#829487]">
          {subtitle}
        </p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F4F7F2] px-4 py-8 sm:px-6 lg:py-12">

      <div className="mx-auto max-w-7xl">

        {/* Navbar */}
        <div className="mb-8 flex items-center justify-between">

          <div>
            <h2 className="text-2xl font-bold tracking-tight text-[#244C3A]">
              stayfinder<span className="text-[#6B9A72]">.</span>
            </h2>
            <p className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.22em] text-[#829487]">
              Partner Portal
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-[#DFE8E0] bg-white px-4 py-2">
            <LockKeyhole size={13} className="text-[#47745A]" />
            <span className="text-[10px] font-medium text-[#47745A]">
              SECURE REGISTRATION
            </span>
          </div>

        </div>

        <div className="grid items-start gap-7 lg:grid-cols-[0.72fr_1.5fr] lg:gap-8">

          {/* Left Panel */}
          <aside className="relative overflow-hidden rounded-3xl bg-[#244C3A] p-7 text-white shadow-lg sm:p-9 lg:sticky lg:top-8">

            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full border border-white/10" />
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border border-white/10" />

            <div className="relative z-10">

              <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2">
                <span className="h-2 w-2 rounded-full bg-[#A9C9A9]" />
                <span className="text-[10px] font-medium uppercase tracking-wider text-[#DDE9DD]">
                  Welcome to Stayfinder
                </span>
              </div>

              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#A9C9A9]">
                Become a partner
              </p>

              <h1 className="max-w-sm text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                Your property.
                <br />
                Your journey.
                <br />
                <span className="text-[#B9D5B8]">
                  Our platform.
                </span>
              </h1>

              <p className="mt-6 text-sm leading-7 text-[#D5E3D7]">
                Join Stayfinder and connect your property with travelers
                looking for their next memorable stay.
              </p>

              {/* Progress */}
              <div className="mt-12 space-y-5">

                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#315E46]">
                    <Check size={18} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white">
                      Personal information
                    </p>
                    <p className="mt-1 text-xs text-[#B9D0BE]">
                      Step 01 · Current step
                    </p>
                  </div>
                </div>

                <div className="ml-5 h-8 w-px bg-white/20" />

                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/5 text-sm text-white">
                    02
                  </div>

                  <div>
                    <p className="text-sm font-medium text-[#D6E2D7]">
                      Property information
                    </p>
                    <p className="mt-1 text-xs text-[#AFC5B2]">
                      Next step
                    </p>
                  </div>
                </div>

              </div>

              {/* Trust Information */}
              <div className="mt-12 border-t border-white/15 pt-6">
                <div className="flex items-start gap-3">
                  <ShieldCheck
                    size={20}
                    className="mt-0.5 shrink-0 text-[#B9D5B8]"
                  />

                  <div>
                    <p className="text-sm font-semibold">
                      Your information matters.
                    </p>
                    <p className="mt-1 text-xs leading-6 text-[#C2D4C5]">
                      Your details are collected for partner registration
                      and verification purposes.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </aside>

          {/* Main Form */}
          <main className="overflow-visible rounded-3xl border border-[#E1EAE1] bg-white shadow-[0_12px_45px_rgba(36,76,58,0.05)]">

            {/* Header */}
            <div className="border-b border-[#EDF1EC] px-6 py-8 sm:px-10">

              <div className="mb-4 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#47745A]" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#47745A]">
                  Step 01 / 02
                </span>
              </div>

              <h2 className="text-3xl font-semibold tracking-tight text-[#263D30] sm:text-4xl">
                Personal information
              </h2>

              <p className="mt-3 max-w-lg text-sm leading-6 text-[#829487]">
                Tell us a little about yourself to get your Stayfinder
                partner registration started.
              </p>

            </div>

            <form onSubmit={handleSubmit}>

              <div className="space-y-9 px-6 py-8 sm:px-10">

                {/* Basic Information */}
                <section>

                  <SectionHeading
                    icon={UserRound}
                    title="Basic information"
                    subtitle="Your personal and contact details"
                  />

                  <div className="grid gap-5 md:grid-cols-2">

                    <div className="md:col-span-2">
                      <label className={labelClass}>
                        Full legal name <span className="text-red-500">*</span>
                      </label>

                      <input
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={(e) =>
                          updateField("fullName", e.target.value)
                        }
                        className={inputClass("fullName")}
                      />

                      {errors.fullName && (
                        <p className="mt-2 text-xs text-red-500">
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className={labelClass}>
                        Email address
                      </label>

                      <div className="relative">
                        <Mail
                          size={17}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#829487]"
                        />

                        <input
                          type="email"
                          value={formData.email}
                          readOnly
                          className="w-full cursor-not-allowed rounded-xl border border-[#DFE8E0] bg-[#F4F7F2] py-3.5 pl-11 pr-11 text-sm text-[#829487] outline-none"
                        />

                        <ShieldCheck
                          size={16}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-[#47745A]"
                        />
                      </div>

                      <p className="mt-2 text-[10px] text-[#829487]">
                        Linked to your registered account.
                      </p>
                    </div>

                    <div>
                      <label className={labelClass}>
                        Mobile number <span className="text-red-500">*</span>
                      </label>

                      <div className="relative">
                        <Phone
                          size={17}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#829487]"
                        />

                        <input
                          type="tel"
                          inputMode="numeric"
                          maxLength={10}
                          placeholder="10-digit mobile number"
                          value={formData.phone}
                          onChange={(e) =>
                            updateField(
                              "phone",
                              e.target.value.replace(/\D/g, "")
                            )
                          }
                          className={`${inputClass("phone")} pl-11`}
                        />
                      </div>

                      {errors.phone && (
                        <p className="mt-2 text-xs text-red-500">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Owner Type */}
                    <div className="relative md:col-span-2">

                      <label className={labelClass}>
                        Owner type <span className="text-red-500">*</span>
                      </label>

                      <button
                        type="button"
                        onClick={() => setShowOwnerTypes(!showOwnerTypes)}
                        className={`flex w-full items-center justify-between rounded-xl border bg-white px-4 py-3.5 text-left transition-all ${
                          showOwnerTypes
                            ? "border-[#47745A] ring-4 ring-[#47745A]/10"
                            : "border-[#DFE8E0] hover:border-[#A9BFAE]"
                        }`}
                      >
                        <div className="flex items-center gap-3">

                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EDF4ED] text-[#315E46]">
                            <selectedOwnerType.icon size={19} />
                          </div>

                          <div>
                            <p className="text-sm font-semibold text-[#34483A]">
                              {selectedOwnerType.label}
                            </p>
                            <p className="mt-1 text-xs text-[#829487]">
                              {selectedOwnerType.description}
                            </p>
                          </div>

                        </div>

                        <ChevronDown
                          size={19}
                          className={`text-[#47745A] transition-transform ${
                            showOwnerTypes ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {showOwnerTypes && (
                        <>
                          <button
                            type="button"
                            aria-label="Close owner type menu"
                            className="fixed inset-0 z-20 cursor-default"
                            onClick={() => setShowOwnerTypes(false)}
                          />

                          <div className="absolute left-0 right-0 top-full z-30 mt-2 overflow-hidden rounded-2xl border border-[#DFE8E0] bg-white p-2 shadow-[0_15px_40px_rgba(36,76,58,0.12)]">

                            {ownerTypes.map((item) => {
                              const Icon = item.icon;
                              const isSelected =
                                formData.ownerType === item.value;

                              return (
                                <button
                                  key={item.value}
                                  type="button"
                                  onClick={() => {
                                    updateField("ownerType", item.value);
                                    setShowOwnerTypes(false);
                                  }}
                                  className={`flex w-full items-center justify-between rounded-xl p-3 text-left transition-colors ${
                                    isSelected
                                      ? "bg-[#EDF4ED]"
                                      : "hover:bg-[#F6F9F5]"
                                  }`}
                                >
                                  <div className="flex items-center gap-3">

                                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                                      isSelected
                                        ? "bg-[#315E46] text-white"
                                        : "bg-[#EDF4ED] text-[#315E46]"
                                    }`}>
                                      <Icon size={18} />
                                    </div>

                                    <div>
                                      <p className="text-sm font-semibold text-[#34483A]">
                                        {item.label}
                                      </p>
                                      <p className="mt-1 text-xs text-[#829487]">
                                        {item.description}
                                      </p>
                                    </div>

                                  </div>

                                  {isSelected && (
                                    <Check
                                      size={18}
                                      className="text-[#315E46]"
                                    />
                                  )}
                                </button>
                              );
                            })}

                          </div>
                        </>
                      )}

                    </div>

                  </div>
                </section>

                <div className="h-px bg-[#EDF1EC]" />

                {/* Identity Verification */}
                <section>

                  <SectionHeading
                    icon={ShieldCheck}
                    title="Identity verification"
                    subtitle="Help us verify your identity"
                  />

                  <div className="grid gap-5 md:grid-cols-2">

                    <div>
                      <label className={labelClass}>
                        Aadhaar number <span className="text-red-500">*</span>
                      </label>

                      <div className="relative">
                        <CreditCard
                          size={17}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#829487]"
                        />

                        <input
                          type="text"
                          inputMode="numeric"
                          maxLength={12}
                          placeholder="12-digit Aadhaar number"
                          value={formData.aadhaarNumber}
                          onChange={(e) =>
                            updateField(
                              "aadhaarNumber",
                              e.target.value.replace(/\D/g, "")
                            )
                          }
                          className={`${inputClass("aadhaarNumber")} pl-11`}
                        />
                      </div>

                      {errors.aadhaarNumber && (
                        <p className="mt-2 text-xs text-red-500">
                          {errors.aadhaarNumber}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className={labelClass}>
                        PAN number <span className="text-red-500">*</span>
                      </label>

                      <div className="relative">
                        <FileCheck
                          size={17}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#829487]"
                        />

                        <input
                          type="text"
                          maxLength={10}
                          placeholder="ABCDE1234F"
                          value={formData.panNumber}
                          onChange={(e) =>
                            updateField(
                              "panNumber",
                              e.target.value.toUpperCase()
                            )
                          }
                          className={`${inputClass("panNumber")} pl-11 uppercase`}
                        />
                      </div>

                      {errors.panNumber && (
                        <p className="mt-2 text-xs text-red-500">
                          {errors.panNumber}
                        </p>
                      )}
                    </div>

                    {/* Aadhaar Upload */}
                    <div className="md:col-span-2">

                      <label className={labelClass}>
                        Aadhaar document <span className="text-red-500">*</span>
                      </label>

                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleFileChange}
                      />

                      {formData.aadhaarDocument && previewUrl ? (
                        <div className="flex flex-col gap-4 rounded-2xl border border-[#DFE8E0] bg-[#F7FAF6] p-4 sm:flex-row sm:items-center">

                          <div className="h-28 w-full overflow-hidden rounded-xl bg-[#EAF1E9] sm:w-40">
                            <img
                              src={previewUrl}
                              alt="Aadhaar document preview"
                              className="h-full w-full object-cover"
                            />
                          </div>

                          <div className="min-w-0 flex-1">

                            <div className="flex items-center gap-2 text-[#47745A]">
                              <Check size={15} />
                              <span className="text-xs font-semibold">
                                Document selected
                              </span>
                            </div>

                            <p className="mt-2 truncate text-sm font-semibold text-[#34483A]">
                              {formData.aadhaarDocument.name}
                            </p>

                            <p className="mt-1 text-xs text-[#829487]">
                              {(formData.aadhaarDocument.size / 1024 / 1024).toFixed(2)} MB
                            </p>

                            <div className="mt-4 flex flex-wrap gap-4">
                              <button
                                type="button"
                                onClick={() => fileInputRef.current?.click()}
                                className="text-xs font-semibold text-[#315E46] hover:text-[#47745A]"
                              >
                                Change document
                              </button>

                              <button
                                type="button"
                                onClick={removeDocument}
                                className="flex items-center gap-1 text-xs font-medium text-red-500"
                              >
                                <X size={13} />
                                Remove
                              </button>
                            </div>

                          </div>
                        </div>
                      ) : (
                        <button
                          type="button"
                          onClick={() => fileInputRef.current?.click()}
                          className={`group flex w-full flex-col items-center justify-center rounded-2xl border-2 border-dashed px-5 py-9 text-center transition-all duration-200 ${
                            errors.aadhaarDocument
                              ? "border-red-300 bg-red-50/30"
                              : "border-[#D5E3D5] bg-[#F7FAF6] hover:border-[#47745A] hover:bg-[#F0F6EF]"
                          }`}
                        >
                          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#315E46] shadow-sm transition-transform group-hover:-translate-y-1">
                            <ImagePlus size={23} />
                          </div>

                          <p className="text-sm font-semibold text-[#34483A]">
                            Upload your Aadhaar document
                          </p>

                          <p className="mt-2 text-xs text-[#829487]">
                            Click to browse and select an image
                          </p>

                          <span className="mt-4 rounded-full bg-[#EAF1E9] px-4 py-2 text-[9px] font-semibold uppercase tracking-wider text-[#315E46]">
                            JPG · PNG · WEBP · Max 5 MB
                          </span>
                        </button>
                      )}

                      {errors.aadhaarDocument && (
                        <p className="mt-2 text-xs text-red-500">
                          {errors.aadhaarDocument}
                        </p>
                      )}

                      <p className="mt-3 flex items-center gap-2 text-[10px] text-[#829487]">
                        <LockKeyhole size={13} />
                        Your document is intended for verification purposes.
                      </p>

                    </div>

                  </div>
                </section>

                <div className="h-px bg-[#EDF1EC]" />

                {/* Payment Information */}
                <section>

                  <SectionHeading
                    icon={Wallet}
                    title="Payment information"
                    subtitle="Your preferred payout details"
                  />

                  <div>
                    <label className={labelClass}>
                      UPI ID <span className="text-red-500">*</span>
                    </label>

                    <div className="relative">
                      <Wallet
                        size={17}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#829487]"
                      />

                      <input
                        type="text"
                        placeholder="yourname@bank"
                        value={formData.upiId}
                        onChange={(e) =>
                          updateField("upiId", e.target.value.trim())
                        }
                        className={`${inputClass("upiId")} pl-11`}
                      />
                    </div>

                    {errors.upiId && (
                      <p className="mt-2 text-xs text-red-500">
                        {errors.upiId}
                      </p>
                    )}

                    <p className="mt-2 text-[11px] text-[#829487]">
                      This UPI ID will be used for owner payout setup.
                    </p>
                  </div>

                </section>

              </div>

              {/* Footer */}
              <div className="rounded-b-3xl border-t border-[#EAF0E9] bg-[#F9FBF8] px-6 py-6 sm:px-10">

                <div className="flex flex-col-reverse items-center justify-between gap-5 sm:flex-row">

                  <div className="flex items-center gap-2 text-[11px] text-[#829487]">
                    <ShieldCheck size={16} className="text-[#47745A]" />
                    Your information is handled with care.
                  </div>

                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#315E46] px-7 py-4 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#244C3A] hover:shadow-lg sm:w-auto"
                  >
                    Continue to Property Details

                    <ArrowRight
                      size={17}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>

                </div>

              </div>

            </form>
          </main>

        </div>

        {/* Bottom Footer */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 text-center sm:flex-row">
          <p className="text-[10px] text-[#829487]">
            © 2026 Stayfinder. All rights reserved.
          </p>

          <p className="text-[10px] text-[#829487]">
            A better way to host. A better way to stay.
          </p>
        </div>

      </div>
    </div>
  );
};

export default OwnerPersonalInformation;
