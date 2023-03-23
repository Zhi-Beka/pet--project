import { useTranslation } from "react-i18next";

const AboutPage = () => {
    const { t } = useTranslation("");
    return (
        <h3 style={{ margin: "20px", lineHeight: "1.5" }}>
            {t("This is my pet project. I am working on FSD design system ")}
        </h3>
    );
};

export default AboutPage;
