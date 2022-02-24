import { useTranslation, Trans } from "react-i18next"

export default function JobExperience() {
  const { t } = useTranslation()
  return (
    <div className="container">
      <h1 className="line-separator">
        <Trans>
          workExperience.title
        </Trans>
      </h1>

      {t("workExperience.content", { returnObjects: true }).map(e =>
        <div key={e.company}>
          <h3>{e.company}</h3>
          <h4>{e.jobPosition}</h4>
          <p className="font-light">{e.description}</p>
        </div>)
      }
    </div>
  )
}
