import { useTranslation, Trans } from "react-i18next"

export default function Languages() {
  const { t } = useTranslation()

  return (
    <div className="languages">
      <h1>
        <Trans>
          languages.sectionTitle
        </Trans>
      </h1>
      {t("languages.content", { returnObjects: true }).map(lang =>
        <p className="font-bold flex justify-between" key={lang.language}>{lang.language}:
          <span className="font-light">{lang.level}</span>
        </p>)}
    </div>
  )
}
