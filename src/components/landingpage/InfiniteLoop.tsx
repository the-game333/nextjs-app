import React, { useState } from 'react';
import Image from 'next/image';
import styles from "../../styles/EndlessPossibility.module.css";
import { useEffect } from 'react';


const LogoItem = ({ image, text }) => (
    <div className="flex items-center gap-4 rounded-xl border border-[#ffffff4d] bg-transparent p-1">
        {/* <div className="rounded-xl bg-[#15131D] p-1">
      {image && <Image alt={text} src={image} />}
    </div> */}
        <p className="text-2xl p-1">{text}</p>
    </div>
);

export default function InfiLoop() {
    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabClick = (tabIndex) => {
        setSelectedTab(tabIndex);
    };
    useEffect(() => {
        //first div
        const logosContainer = document.querySelector(`.${styles.logos}`);
        const logosSlideRight = document.querySelector(`.${styles.logos_slide_right}`);
        const logosContent = Array.from(logosSlideRight.children);
        logosContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            logosSlideRight.appendChild(duplicatedItem);
        });

        //second div
        const logosContainer1 = document.querySelector(`.${styles.logos}`);
        const logosSlideRight1 = document.querySelector(`.${styles.logos_slide_right1}`);
        const logosContent1 = Array.from(logosSlideRight1.children);
        logosContent1.forEach((item) => {
            const duplicatedItem1 = item.cloneNode(true);
            logosSlideRight1.appendChild(duplicatedItem1);
        });

        //third div

        const logosContainer2 = document.querySelector(`.${styles.logos}`);
        const logosSlideRight2 = document.querySelector(`.${styles.logos_slide_right2}`);
        const logosContent2 = Array.from(logosSlideRight2.children);
        logosContent2.forEach((item) => {
            const duplicatedItem2 = item.cloneNode(true);
            logosSlideRight2.appendChild(duplicatedItem2);

        });
    }, []);

    return (

        <div className={`${styles.logos} mt-5`}>

            <div className={`${styles.logos_slide_right} my-5 items-center gap-4`}>
                <LogoItem text="Chat Bots" />
                <LogoItem text="Workflows" />
                <LogoItem text="Chat Agents" />
                <LogoItem text="Assistive AI" />
            </div>
            {/* Right Slide Logos */}
            <div className={`${styles.logos_slide_right1} items-center gap-4`}>
                <LogoItem text="Code Converter" />
                <LogoItem text="Batch Operations" />
                <LogoItem text="SQL Generator" />
                <LogoItem text="Tools" />
            </div>

            {/* Left Slide Logos */}
            <div className={`${styles.logos_slide_right2} my-5 items-center gap-4`}>
                <LogoItem text="Chat Bots" />
                <LogoItem text="Workflows" />
                <LogoItem text="Chat Agents" />
                <LogoItem text="Assistive AI" />
            </div>
        </div>
    );
}
