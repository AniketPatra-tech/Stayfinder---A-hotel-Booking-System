
import React, { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  MapPin,
  Phone,
  CalendarDays,
  Globe,
  ChevronDown,
  Check,
  Hotel,
  Home,
  Building,
  Tent,
  Map,
  Navigation,
  ShieldCheck,
  X,
  LocateFixed,
} from "lucide-react";

const PropertyInformation = ({
  initialData = {},
  onBack,
  onNext,
}) => {
  const propertyTypes = [
    {
      value: "hotel",
      label: "Hotel",
      description: "Traditional hotels and luxury stays",
      icon: Hotel,
    },
    {
      value: "resort",
      label: "Resort",
      description: "Relaxing holiday and leisure properties",
      icon: Building2,
    },
    {
      value: "guesthouse",
      label: "Guest House",
      description: "Comfortable guest houses and lodges",
      icon: Home,
    },
    {
      value: "homestay",
      label: "Homestay",
      description: "Personal and family-run accommodations",
      icon: Home,
    },
    {
      value: "hostel",
      label: "Hostel",
      description: "Shared and budget-friendly accommodation",
      icon: Building,
    },
    {
      value: "other",
      label: "Other",
      description: "Other types of accommodation",
      icon: Tent,
    },
  ];

  const [formData, setFormData] = useState({
    propertyName: initialData.propertyName || "",
    propertyType: initialData.propertyType || "",
    description: initialData.description || "",
    contactNumber: initialData.contactNumber || "",
    establishmentYear: initialData.establishmentYear || "",
    website: initialData.website || "",
    location: {
      address: initialData.location?.address || "",
      city: initialData.location?.city || "",
      state: initialData.location?.state || "",
      postalCode: initialData.location?.postalCode || "",
      country: initialData.location?.country || "India",
      latitude: initialData.location?.latitude || "",
      longitude: initialData.location?.longitude || "",
    },
  });

  const [errors, setErrors] = useState({});
  const [showPropertyTypes, setShowPropertyTypes] = useState(false);

  const selectedPropertyType = propertyTypes.find(
    (item) => item.value === formData.propertyType
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

  const updateLocation = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      location: {
        ...prev.location,
        [name]: value,
      },
    }));

    setErrors((prev) => ({
      ...prev,
      location: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.propertyName.trim()) {
      newErrors.propertyName = "Please enter your property name.";
    }

    if (!formData.propertyType) {
      newErrors.propertyType = "Please select a property type.";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Please provide a property description.";
    } else if (formData.description.trim().length < 30) {
      newErrors.description =
        "Description must contain at least 30 characters.";
    }

    if (!/^[6-9]\d{9}$/.test(formData.contactNumber)) {
      newErrors.contactNumber = "Enter a valid 10-digit mobile number.";
    }

    const currentYear = new Date().getFullYear();

    if (
      !formData.establishmentYear ||
      Number(formData.establishmentYear) < 1800 ||
      Number(formData.establishmentYear) > currentYear
    ) {
      newErrors.establishmentYear = "Enter a valid establishment year.";
    }

    if (
      formData.website &&
      !/^https?:\/\/.+\..+/.test(formData.website)
    ) {
      newErrors.website =
        "Enter a valid website URL, including https://.";
    }

    const location = formData.location;

    if (
      !location.address.trim() ||
      !location.city.trim() ||
      !location.state.trim() ||
      !location.postalCode.trim() ||
      !location.latitude ||
      !location.longitude
    ) {
      newErrors.location =
        "Complete the address and select the property's map coordinates.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    onNext?.(formData);
  };

  const handleMapSearch = () => {
    const searchText = [
      formData.propertyName,
      formData.location.address,
      formData.location.city,
      formData.location.state,
      formData.location.country,
    ]
      .filter(Boolean)
      .join(", ");

    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      searchText || "Search property location"
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
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
            <ShieldCheck size={14} className="text-[#47745A]" />

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
                  Almost there
                </span>
              </div>

              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#A9C9A9]">
                List your property
              </p>

              <h1 className="max-w-sm text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                Bring your
                <br />
                property to
                <br />
                <span className="text-[#B9D5B8]">
                  Stayfinder.
                </span>
              </h1>

              <p className="mt-6 text-sm leading-7 text-[#D5E3D7]">
                Tell us about your property and where travelers can find
                you. Let's get your listing started.
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
                      Step 01 · Completed
                    </p>
                  </div>
                </div>

                <div className="ml-5 h-8 w-px bg-white/20" />

                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white bg-white/15 text-sm font-semibold text-white">
                    02
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white">
                      Property information
                    </p>
                    <p className="mt-1 text-xs text-[#B9D0BE]">
                      Step 02 · Current step
                    </p>
                  </div>
                </div>

              </div>

              {/* Information */}
              <div className="mt-12 border-t border-white/15 pt-6">
                <div className="flex items-start gap-3">
                  <MapPin
                    size={20}
                    className="mt-0.5 shrink-0 text-[#B9D5B8]"
                  />

                  <div>
                    <p className="text-sm font-semibold">
                      Accurate location matters.
                    </p>

                    <p className="mt-1 text-xs leading-6 text-[#C2D4C5]">
                      Your property's location helps travelers discover
                      and navigate to your property.
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
                  Step 02 / 02
                </span>
              </div>

              <h2 className="text-3xl font-semibold tracking-tight text-[#263D30] sm:text-4xl">
                Property information
              </h2>

              <p className="mt-3 max-w-lg text-sm leading-6 text-[#829487]">
                Share the essential details about your property so we
                can get your listing ready for verification.
              </p>

            </div>

            <form onSubmit={handleSubmit}>

              <div className="space-y-9 px-6 py-8 sm:px-10">

                {/* Property Details */}
                <section>

                  <SectionHeading
                    icon={Building2}
                    title="Property details"
                    subtitle="Basic information about your property"
                  />

                  <div className="grid gap-5 md:grid-cols-2">

                    {/* Property Name */}
                    <div className="md:col-span-2">

                      <label className={labelClass}>
                        Property name <span className="text-red-500">*</span>
                      </label>

                      <input
                        type="text"
                        placeholder="e.g. The Green Valley Resort"
                        value={formData.propertyName}
                        onChange={(e) =>
                          updateField("propertyName", e.target.value)
                        }
                        className={inputClass("propertyName")}
                      />

                      {errors.propertyName && (
                        <p className="mt-2 text-xs text-red-500">
                          {errors.propertyName}
                        </p>
                      )}

                    </div>

                    {/* Property Type */}
                    <div className="relative md:col-span-2">

                      <label className={labelClass}>
                        Property type <span className="text-red-500">*</span>
                      </label>

                      <button
                        type="button"
                        onClick={() =>
                          setShowPropertyTypes(!showPropertyTypes)
                        }
                        className={`flex w-full items-center justify-between rounded-xl border bg-white px-4 py-3.5 text-left transition-all ${
                          showPropertyTypes
                            ? "border-[#47745A] ring-4 ring-[#47745A]/10"
                            : errors.propertyType
                              ? "border-red-400"
                              : "border-[#DFE8E0] hover:border-[#A9BFAE]"
                        }`}
                      >

                        {selectedPropertyType ? (
                          <div className="flex items-center gap-3">

                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EDF4ED] text-[#315E46]">
                              <selectedPropertyType.icon size={19} />
                            </div>

                            <div>
                              <p className="text-sm font-semibold text-[#34483A]">
                                {selectedPropertyType.label}
                              </p>

                              <p className="mt-1 text-xs text-[#829487]">
                                {selectedPropertyType.description}
                              </p>
                            </div>

                          </div>
                        ) : (
                          <span className="text-sm text-[#9CA99E]">
                            Select your property type
                          </span>
                        )}

                        <ChevronDown
                          size={19}
                          className={`text-[#47745A] transition-transform ${
                            showPropertyTypes ? "rotate-180" : ""
                          }`}
                        />

                      </button>

                      {showPropertyTypes && (
                        <>
                          <button
                            type="button"
                            aria-label="Close property type menu"
                            className="fixed inset-0 z-20 cursor-default"
                            onClick={() => setShowPropertyTypes(false)}
                          />

                          <div className="absolute left-0 right-0 top-full z-30 mt-2 grid gap-1 overflow-hidden rounded-2xl border border-[#DFE8E0] bg-white p-2 shadow-[0_15px_40px_rgba(36,76,58,0.12)] sm:grid-cols-2">

                            {propertyTypes.map((item) => {
                              const Icon = item.icon;
                              const isSelected =
                                formData.propertyType === item.value;

                              return (
                                <button
                                  key={item.value}
                                  type="button"
                                  onClick={() => {
                                    updateField("propertyType", item.value);
                                    setShowPropertyTypes(false);
                                  }}
                                  className={`flex items-center gap-3 rounded-xl p-3 text-left transition-colors ${
                                    isSelected
                                      ? "bg-[#EDF4ED]"
                                      : "hover:bg-[#F6F9F5]"
                                  }`}
                                >

                                  <div
                                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                                      isSelected
                                        ? "bg-[#315E46] text-white"
                                        : "bg-[#EDF4ED] text-[#315E46]"
                                    }`}
                                  >
                                    <Icon size={18} />
                                  </div>

                                  <div className="min-w-0 flex-1">
                                    <p className="text-sm font-semibold text-[#34483A]">
                                      {item.label}
                                    </p>

                                    <p className="mt-1 text-[10px] leading-4 text-[#829487]">
                                      {item.description}
                                    </p>
                                  </div>

                                  {isSelected && (
                                    <Check
                                      size={16}
                                      className="shrink-0 text-[#315E46]"
                                    />
                                  )}

                                </button>
                              );
                            })}

                          </div>
                        </>
                      )}

                      {errors.propertyType && (
                        <p className="mt-2 text-xs text-red-500">
                          {errors.propertyType}
                        </p>
                      )}

                    </div>

                    {/* Description */}
                    <div className="md:col-span-2">

                      <label className={labelClass}>
                        Property description <span className="text-red-500">*</span>
                      </label>

                      <textarea
                        rows={5}
                        maxLength={1000}
                        placeholder="Describe your property, its atmosphere, facilities and what makes it special..."
                        value={formData.description}
                        onChange={(e) =>
                          updateField("description", e.target.value)
                        }
                        className={`${inputClass("description")} resize-none`}
                      />

                      <div className="mt-2 flex items-center justify-between">
                        {errors.description ? (
                          <p className="text-xs text-red-500">
                            {errors.description}
                          </p>
                        ) : (
                          <p className="text-[10px] text-[#829487]">
                            Minimum 30 characters
                          </p>
                        )}

                        <span className="text-[10px] text-[#829487]">
                          {formData.description.length}/1000
                        </span>
                      </div>

                    </div>

                    {/* Contact */}
                    <div>

                      <label className={labelClass}>
                        Property contact number <span className="text-red-500">*</span>
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
                          value={formData.contactNumber}
                          onChange={(e) =>
                            updateField(
                              "contactNumber",
                              e.target.value.replace(/\D/g, "")
                            )
                          }
                          className={`${inputClass("contactNumber")} pl-11`}
                        />
                      </div>

                      {errors.contactNumber && (
                        <p className="mt-2 text-xs text-red-500">
                          {errors.contactNumber}
                        </p>
                      )}

                    </div>

                    {/* Establishment Year */}
                    <div>

                      <label className={labelClass}>
                        Year of establishment <span className="text-red-500">*</span>
                      </label>

                      <div className="relative">
                        <CalendarDays
                          size={17}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#829487]"
                        />

                        <input
                          type="number"
                          min="1800"
                          max={new Date().getFullYear()}
                          placeholder="e.g. 2018"
                          value={formData.establishmentYear}
                          onChange={(e) =>
                            updateField("establishmentYear", e.target.value)
                          }
                          className={`${inputClass("establishmentYear")} pl-11`}
                        />
                      </div>

                      {errors.establishmentYear && (
                        <p className="mt-2 text-xs text-red-500">
                          {errors.establishmentYear}
                        </p>
                      )}

                    </div>

                    {/* Website */}
                    <div className="md:col-span-2">

                      <label className={labelClass}>
                        Property website
                        <span className="ml-2 text-xs font-normal text-[#9CA99E]">
                          (Optional)
                        </span>
                      </label>

                      <div className="relative">
                        <Globe
                          size={17}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#829487]"
                        />

                        <input
                          type="url"
                          placeholder="https://www.yourproperty.com"
                          value={formData.website}
                          onChange={(e) =>
                            updateField("website", e.target.value)
                          }
                          className={`${inputClass("website")} pl-11`}
                        />
                      </div>

                      {errors.website && (
                        <p className="mt-2 text-xs text-red-500">
                          {errors.website}
                        </p>
                      )}

                    </div>

                  </div>
                </section>

                <div className="h-px bg-[#EDF1EC]" />

                {/* Location */}
                <section>

                  <SectionHeading
                    icon={MapPin}
                    title="Property location"
                    subtitle="Where can travelers find your property?"
                  />

                  <div className="space-y-5">

                    {/* Map Selection Area */}
                    <div className="overflow-hidden rounded-2xl border border-[#DFE8E0]">

                      <div className="flex flex-col gap-3 bg-[#F7FAF6] p-4 sm:flex-row sm:items-center sm:justify-between">

                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF1E9] text-[#315E46]">
                            <Map size={19} />
                          </div>

                          <div>
                            <p className="text-sm font-semibold text-[#34483A]">
                              Select your property on the map
                            </p>

                            <p className="mt-1 text-xs text-[#829487]">
                              Google Maps location selection
                            </p>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={handleMapSearch}
                          className="flex items-center justify-center gap-2 rounded-xl bg-[#315E46] px-4 py-3 text-xs font-semibold text-white transition-colors hover:bg-[#244C3A]"
                        >
                          <Navigation size={15} />
                          Open Google Maps
                        </button>

                      </div>

                      {/* Map Preview */}
                      <div className="relative flex min-h-[220px] items-center justify-center overflow-hidden bg-[#EAF1E9]">

                        <div className="absolute inset-0 opacity-40">
                          <div className="absolute left-[15%] top-0 h-full w-5 rotate-[25deg] bg-white" />
                          <div className="absolute left-[45%] top-0 h-full w-4 -rotate-[20deg] bg-white" />
                          <div className="absolute right-[20%] top-0 h-full w-6 rotate-[40deg] bg-white" />
                          <div className="absolute left-0 top-[35%] h-5 w-full rotate-[8deg] bg-white" />
                          <div className="absolute left-0 top-[70%] h-4 w-full -rotate-[5deg] bg-white" />
                        </div>

                        <div className="relative z-10 flex flex-col items-center text-center">

                          <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#315E46] shadow-md">
                            <MapPin size={27} />
                          </div>

                          <p className="text-sm font-semibold text-[#315E46]">
                            Your property location
                          </p>

                          <p className="mt-2 max-w-xs px-4 text-xs leading-5 text-[#718675]">
                            Open Google Maps to find your property and
                            identify its exact coordinates.
                          </p>

                        </div>

                        <div className="absolute bottom-3 right-3 rounded-lg bg-white/90 px-3 py-2 text-[9px] font-medium text-[#829487]">
                          Map preview
                        </div>

                      </div>

                    </div>

                    <p className="text-xs leading-5 text-[#829487]">
                      The Google Maps button currently opens the map for
                      your property search. Interactive pin selection and
                      automatic coordinate capture will be connected
                      during Google Maps API integration.
                    </p>

                    {/* Address Fields */}
                    <div className="grid gap-5 md:grid-cols-2">

                      <div className="md:col-span-2">

                        <label className={labelClass}>
                          Street address <span className="text-red-500">*</span>
                        </label>

                        <input
                          type="text"
                          placeholder="Building name, street, area or landmark"
                          value={formData.location.address}
                          onChange={(e) =>
                            updateLocation("address", e.target.value)
                          }
                          className={inputClass("address")}
                        />

                      </div>

                      <div>

                        <label className={labelClass}>
                          City <span className="text-red-500">*</span>
                        </label>

                        <input
                          type="text"
                          placeholder="Enter city"
                          value={formData.location.city}
                          onChange={(e) =>
                            updateLocation("city", e.target.value)
                          }
                          className={inputClass("city")}
                        />

                      </div>

                      <div>

                        <label className={labelClass}>
                          State <span className="text-red-500">*</span>
                        </label>

                        <input
                          type="text"
                          placeholder="Enter state"
                          value={formData.location.state}
                          onChange={(e) =>
                            updateLocation("state", e.target.value)
                          }
                          className={inputClass("state")}
                        />

                      </div>

                      <div>

                        <label className={labelClass}>
                          PIN code <span className="text-red-500">*</span>
                        </label>

                        <input
                          type="text"
                          inputMode="numeric"
                          maxLength={6}
                          placeholder="6-digit PIN code"
                          value={formData.location.postalCode}
                          onChange={(e) =>
                            updateLocation(
                              "postalCode",
                              e.target.value.replace(/\D/g, "")
                            )
                          }
                          className={inputClass("postalCode")}
                        />

                      </div>

                      <div>

                        <label className={labelClass}>
                          Country
                        </label>

                        <input
                          type="text"
                          value={formData.location.country}
                          readOnly
                          className="w-full cursor-not-allowed rounded-xl border border-[#DFE8E0] bg-[#F4F7F2] px-4 py-3.5 text-sm text-[#829487] outline-none"
                        />

                      </div>

                    </div>

                    {/* Coordinates */}
                    <div className="rounded-2xl border border-[#DFE8E0] bg-[#F7FAF6] p-5">

                      <div className="mb-4 flex items-center gap-3">
                        <LocateFixed
                          size={19}
                          className="text-[#47745A]"
                        />

                        <div>
                          <p className="text-sm font-semibold text-[#34483A]">
                            Map coordinates
                          </p>

                          <p className="mt-1 text-xs text-[#829487]">
                            Required for accurate property positioning
                          </p>
                        </div>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">

                        <div>
                          <label className={labelClass}>
                            Latitude
                          </label>

                          <input
                            type="number"
                            step="any"
                            placeholder="e.g. 22.5726"
                            value={formData.location.latitude}
                            onChange={(e) =>
                              updateLocation("latitude", e.target.value)
                            }
                            className={inputClass("latitude")}
                          />
                        </div>

                        <div>
                          <label className={labelClass}>
                            Longitude
                          </label>

                          <input
                            type="number"
                            step="any"
                            placeholder="e.g. 88.3639"
                            value={formData.location.longitude}
                            onChange={(e) =>
                              updateLocation("longitude", e.target.value)
                            }
                            className={inputClass("longitude")}
                          />
                        </div>

                      </div>

                      <p className="mt-3 text-[10px] leading-5 text-[#829487]">
                        These fields will be populated automatically when
                        interactive Google Maps pin selection is integrated.
                        For now, you can enter coordinates manually.
                      </p>

                    </div>

                    {errors.location && (
                      <div className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-3">
                        <X size={15} className="mt-0.5 text-red-500" />

                        <p className="text-xs leading-5 text-red-600">
                          {errors.location}
                        </p>
                      </div>
                    )}

                  </div>
                </section>

              </div>

              {/* Footer Actions */}
              <div className="rounded-b-3xl border-t border-[#EAF0E9] bg-[#F9FBF8] px-6 py-6 sm:px-10">

                <div className="flex flex-col-reverse items-center justify-between gap-5 sm:flex-row">

                  <button
                    type="button"
                    onClick={onBack}
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#DCE7DC] bg-white px-6 py-3.5 text-sm font-semibold text-[#47745A] transition-colors hover:bg-[#EDF4ED] sm:w-auto"
                  >
                    <ArrowLeft size={16} />
                    Back
                  </button>

                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#315E46] px-7 py-4 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#244C3A] hover:shadow-lg sm:w-auto"
                  >
                    Submit for Verification

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

export default PropertyInformation;
