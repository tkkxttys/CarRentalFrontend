import ReservationMenu from "@/components/ReservaionMenu";
import styles from './reservations.module.css'

export default function ReservationLayot ( {children}: {children: React.ReactNode} ) {
    return (
        <div className={styles.sectionlayout}>
            <ReservationMenu/>
            {children}
        </div>
    );
}