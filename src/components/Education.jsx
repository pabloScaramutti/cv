import { useTranslation, Trans } from "react-i18next"

export default function Education() {

  const { t } = useTranslation()

  return (
    <div className="container">
      <h1 className="line-separator">
        <Trans>education.title</Trans>
      </h1>

      {
        t("education.content", { returnObjects: true }).map(e =>
          <div key={e.title}>
            <div className="flex align-center no-margin wrap">
              <h3 className="mr-1">{e.title}</h3>
              <p className="font-light font-small">{e.status ? e.status : ''}</p>
            </div>
            <h4>{e.university}</h4>
            <p className="font-light">{e.faculty}</p>
            <p className="font-light">{e.location}</p>
          </div>)
      }

    </div>
  )
}
