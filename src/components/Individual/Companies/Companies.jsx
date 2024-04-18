import styles from "./Companies.module.css";

const Companies = () => {
  return (
    <div className={styles.companies_wrapper}>
      <div className="container">
        <div className={styles.companies_container}>
          <span className={styles.title}>Featured in</span>

          <div className={styles.companies}>
            <img src="/individual/companies/1.svg" alt="Tech crunch" />
            <img src="/individual/companies/2.svg" alt="HR Tech" />
            <img src="/individual/companies/3.svg" alt="Yahoo" />
            <img src="/individual/companies/4.svg" alt="Product Hunt" />
            <img src="/individual/companies/5.svg" alt="Bussiness Insider" />
            <img src="/individual/companies/6.svg" alt="Tech Republic" />
            <img src="/individual/companies/7.svg" alt="Tech Day" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Companies;
