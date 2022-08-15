import Title from '../title'
import { motion } from 'framer-motion'
import styles from "@/styles/loading.module.css"
const Loading = () => {
    return (
        <>
            <Title />
            <div className={`${styles.loader}`} >
                <motion.svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 162.51 141.23"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}>
                    <g id="Layer_1-2">
                        <g>
                            <motion.polygon
                                fill="transparent"
                                stroke="#000000"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 2, ease: "easeInOut", delay: 0.4 }}
                                points="160.28 131.07 150.12 141.23 142.98 134.09 139.96 131.07 119.63 110.74 109.46 100.57 99.3 90.41 89.13 80.25 78.97 70.08 68.81 59.92 78.97 49.75 119.63 90.41 129.79 100.57 139.96 110.74 160.28 131.07" />
                            <motion.path
                                fill="transparent"
                                stroke="#000000"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 2, ease: "easeInOut", delay: 0.2 }}
                                d="M109.46,120.9l-10.17,10.16-40.66-40.66-10.16,10.17-10.17,10.16-10.16,10.17-8.97-8.97c-.25-.4-.49-.79-.73-1.19h0c-.05-.11-.1-.22-.15-.33l9.84-9.84,10.17-10.16,10.16-10.17,10.17-10.16,50.82,50.82Z" />
                            <motion.path
                                fill="transparent"
                                stroke="#000000"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                                d="M162.51,81.25c0,10.59-2.03,20.71-5.72,29.99l-9.31-9.31c2.04-6.53,3.13-13.48,3.13-20.68,0-28.25-16.89-52.56-41.13-63.37-3.65-1.63-7.47-2.96-11.43-3.94-5.38-1.34-11.01-2.05-16.81-2.05-7.2,0-14.15,1.1-20.68,3.13-3.78,1.18-7.43,2.68-10.9,4.46C27.24,30.97,11.89,54.32,11.89,81.25c0,5.8,.71,11.42,2.05,16.81l-9.57,9.57C1.54,99.36,0,90.48,0,81.25,0,51.06,16.46,24.72,40.9,10.71c3.31-1.9,6.78-3.58,10.36-5C60.54,2.03,70.66,0,81.25,0c9.23,0,18.1,1.54,26.37,4.38,3.72,1.27,7.32,2.81,10.77,4.59,26.2,13.49,44.11,40.79,44.11,72.28Z" />
                        </g>
                    </g>
                </motion.svg>
            </div>
        </>
    )
}


export default Loading