import { useEffect, useMemo, useState } from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import { TCountryInfo, useCountryInfo } from "use-country-info";
import "./App.css";
import { CountrySelect, type CountryOption } from "./components/CountrySelect";
import "./components/CountrySelect.css";

export const App = () => {
  return (
    <div className="page">
      <header className="topbar">
        <h1>Country Information</h1>
        <nav className="nav">
          <Link to="/">Listagem</Link>
          <Link to="/components">Exemplos de componentes</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/components" element={<ComponentsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

/* Página principal com filtros */
const HomePage = () => {
  const { allCountryInfo } = useCountryInfo();

  const [region, setRegion] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("name-asc");

  const regions = useMemo(() => {
    const set = new Set<string>();
    (allCountryInfo as any[]).forEach((c) => {
      const r = c?.region;
      if (r && typeof r === "string") set.add(r);
    });
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [allCountryInfo]);

  const filtered = useMemo(() => {
    let data = [...(allCountryInfo as TCountryInfo[])];

    if (region !== "all") {
      data = data.filter(
        (c: any) => (c?.region || "").toLowerCase() === region.toLowerCase()
      );
    }

    const compareName = (a: any, b: any) =>
      (a?.name?.common || a?.name?.official || "").localeCompare(
        b?.name?.common || b?.name?.official || "",
        "pt",
        { sensitivity: "base" }
      );

    const pop = (c: any) =>
      typeof c?.population === "number" ? c.population : -1;

    switch (sortBy) {
      case "name-asc":
        data.sort(compareName);
        break;
      case "name-desc":
        data.sort((a, b) => compareName(b, a));
        break;
      case "pop-asc":
        data.sort((a, b) => pop(a) - pop(b));
        break;
      case "pop-desc":
        data.sort((a, b) => pop(b) - pop(a));
        break;
      default:
        break;
    }
    return data;
  }, [allCountryInfo, region, sortBy]);

  return (
    <>
      <section className="toolbar">
        <div className="field">
          <label htmlFor="region">Região</label>
          <select
            id="region"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
          >
            <option value="all">Todas</option>
            {regions.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>

        <div className="field">
          <label htmlFor="sort">Ordenar por</label>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="name-asc">Nome (A-Z)</option>
            <option value="name-desc">Nome (Z-A)</option>
            <option value="pop-asc">População (menor → maior)</option>
            <option value="pop-desc">População (maior → menor)</option>
          </select>
        </div>
      </section>

      <h2 className="section-title">Países</h2>
      <CountryList countries={filtered} />
    </>
  );
};

const CountryList = ({ countries }: { countries: TCountryInfo[] }) => {
  return (
    <ul className="country-grid">
      {countries.map((country) => (
        <CountryCard
          key={
            (country as any)?.cca3 ??
            country?.name?.common ??
            String(country?.area)
          }
          country={country}
        />
      ))}
    </ul>
  );
};

const CountryCard = ({ country }: { country: TCountryInfo }) => {
  const flagPng =
    (country as any)?.flags?.png || (country as any)?.flags?.svg || "";
  const nameCommon =
    (country as any)?.name?.common ||
    (country as any)?.name?.official ||
    "Unknown";
  const capital = Array.isArray((country as any)?.capital)
    ? (country as any)?.capital?.[0]
    : (country as any)?.capital || "N/A";
  const population =
    typeof (country as any)?.population === "number"
      ? (country as any).population.toLocaleString()
      : "N/A";

  const languagesRaw = (country as any)?.languages;
  const languagesText = Array.isArray(languagesRaw)
    ? languagesRaw.join(", ")
    : languagesRaw && typeof languagesRaw === "object"
    ? Object.values(languagesRaw as Record<string, string>).join(", ")
    : typeof languagesRaw === "string"
    ? languagesRaw
    : "N/A";

  const tzRaw = (country as any)?.timezones ?? (country as any)?.timezone;
  const timezonesText = Array.isArray(tzRaw)
    ? tzRaw.join(", ")
    : typeof tzRaw === "string"
    ? tzRaw
    : "N/A";

  return (
    <li className="card">
      <img
        className="card-flag"
        src={flagPng}
        alt={`Bandeira de ${nameCommon}`}
      />
      <div className="card-body">
        <h3 className="card-title">{nameCommon}</h3>
        <p className="card-meta">
          <strong>Capital:</strong> {capital}
        </p>
        <p className="card-meta">
          <strong>População:</strong> {population}
        </p>
        <p className="card-meta">
          <strong>Área:</strong>{" "}
          {(country as any)?.area ? `${(country as any).area} km²` : "N/A"}
        </p>
        <p className="card-meta">
          <strong>Região:</strong> {(country as any)?.region || "N/A"}
        </p>
        <p className="card-meta">
          <strong>Sub-região:</strong> {(country as any)?.subregion || "N/A"}
        </p>
        <p className="card-meta">
          <strong>Línguas:</strong> {languagesText}
        </p>
        <p className="card-meta">
          <strong>Fusos horários:</strong> {timezonesText}
        </p>
      </div>
    </li>
  );
};

/* Página de exemplos de componentes */
const ComponentsPage = () => {
  const { allCountryInfo } = useCountryInfo();
  const [lang, setLang] = useState<"pt" | "en">("pt");
  const [selectedCca3, setSelectedCca3] = useState<string>("");

  const options = useMemo<CountryOption[]>(() => {
    return (allCountryInfo as any[])
      .map((c) => {
        const name =
          c?.name?.common || c?.name?.official || c?.name || "Unknown";
        const flagEmoji = c?.flag;
        const flagPng = c?.flags?.png || c?.flags?.svg || "";
        const ddi =
          (c?.idd?.root && c?.idd?.suffixes?.[0]
            ? `${c.idd.root}${c.idd.suffixes[0]}`
            : c?.callingCode || c?.callingCodes?.[0] || c?.ddi || "") || "";
        const cca3 = c?.cca3 || name;
        return { cca3, name, flagEmoji, flagPng, ddi };
      })
      .sort((a, b) =>
        a.name.localeCompare(b.name, "pt", { sensitivity: "base" })
      );
  }, [allCountryInfo]);

  const selected = options.find((o) => o.cca3 === selectedCca3);

  return (
    <div className="components-page">
      <h2>Exemplos de componentes</h2>

      <div className="form-grid">
        <div className="field">
          <label htmlFor="country-ddi">
            {lang === "pt"
              ? "Selecione um país (bandeira + DDI)"
              : "Select a country (flag + dial code)"}
          </label>

          {/* Substitui o <select> nativo pelo customizado */}
          <CountrySelect
            options={options}
            value={selectedCca3}
            onChange={setSelectedCca3}
            placeholder={lang === "pt" ? "Escolha..." : "Choose..."}
          />

          {selected && (
            <div className="preview">
              {selected.flagPng ? (
                <img
                  src={selected.flagPng}
                  alt={`Bandeira de ${selected.name}`}
                />
              ) : (
                <span className="emoji-flag" aria-label="flag">
                  {selected.flagEmoji || "🏳️"}
                </span>
              )}
              <div className="preview-info">
                <div>
                  <strong>{lang === "pt" ? "País" : "Country"}:</strong>{" "}
                  {selected.name}
                </div>
                <div>
                  <strong>DDI:</strong>{" "}
                  {selected.ddi || (lang === "pt" ? "N/A" : "N/A")}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="field">
          <span className="label">
            {lang === "pt" ? "Idioma da UI" : "UI language"}
          </span>
          <div className="radios">
            <label>
              <input
                type="radio"
                name="lang"
                value="pt"
                checked={lang === "pt"}
                onChange={() => setLang("pt")}
              />{" "}
              Português
            </label>
            <label>
              <input
                type="radio"
                name="lang"
                value="en"
                checked={lang === "en"}
                onChange={() => setLang("en")}
              />{" "}
              English
            </label>
          </div>

          <div className="i18n-sample">
            {lang === "pt"
              ? "Este é um exemplo de troca de idioma usando radio buttons."
              : "This is an example of language switch using radio buttons."}
          </div>
        </div>
      </div>
    </div>
  );
};
