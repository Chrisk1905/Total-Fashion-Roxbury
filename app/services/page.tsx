import styles from './page.module.css'


export default function Page(){
    return (
        <>
            <div className={styles.service_container}>
                <div>
                    <h1>Dry Clean</h1>
                </div>
                <div>
                    <h1>Alterations</h1>
                </div>
                <div>
                    <h1>Wedding Dress</h1>
                </div>
            </div>
       </>
    );
}