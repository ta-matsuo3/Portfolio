import styles from './WorkThumbnail.module.css'
import React, { useState } from 'react'
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import worksList from "../Works/worksList";


export default function WorkThumbnail({ isClickWork, expanded, setIsModal, setSelectedWork, isModal }) {
    const handleWork = (title) => {
        const target = worksList.find(item => item.title === title);
        setSelectedWork(target);
        setIsModal(!isModal)
    }

    const latestThree = [...worksList].sort((a, b) => {
        const dateA = new Date(a.productionDate.year, a.productionDate.month - 1, a.productionDate.day);
        const dateB = new Date(b.productionDate.year, b.productionDate.month - 1, b.productionDate.day);
        return dateB - dateA;
    })
        .slice(0, 3);


    return (
        <div className={`${styles.thumbnail} ${expanded ? styles.expanded : ""}`}>
            <section
                className={`${isClickWork ? styles.close : ''} ${styles.btn} ${expanded ? styles.expanded : ""}`}
            >
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation
                    // pagination={{ clickable: true }}
                    autoplay={{ delay: 20000 }}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                >
                    {latestThree.map(item => (
                        <li key={item.id ?? `${item.productionDate.year}-${item.productionDate.month}-${item.productionDate.day}`}>
                            <SwiperSlide>
                                <img src={item.image} alt={item.title} onClick={() => handleWork(item.title)} style={{ borderRadius: '8px', width: '100%', display: 'block' }} />
                                <p className={styles.title} style={{
                                    color: '#fff',
                                    lineHeight: 1.4,
                                    textAlign: 'center',
                                    paddingBottom: '4px'
                                }}>{item.title}</p>
                            </SwiperSlide>
                        </li>
                    ))}
                </Swiper>

            </ section>
        </div>
    )
}



