import React, { useState } from 'react'
import './Card.css'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { UilTimes } from '@iconscout/react-unicons';
import Chart from 'react-apexcharts';
import { motion, AnimateSharedLayout, inimatedSharedLayout } from 'framer-motion'
import { withTheme } from '@emotion/react';

const Card = (props) => {
    const [expended, setExpended] = useState(false);
    return (
        <AnimateSharedLayout>
            {
                expended ? (<ExpendedCard param={props} setExpended={() => setExpended(false)} />)
                    : <CompactCard param={props} setExpended={() => setExpended(true)} />
            }
        </AnimateSharedLayout>
    )
}

function CompactCard({ param, setExpended }) {
    const Png = param.png;
    return (
        <motion.div className="CompactCard"
            style={{
                background: param.color.backGround,
                boxShadow: param.color.boxShadow
            }}
            layoutId='expandableCard'
            onClick={setExpended}
        >
            <div className="radialBar">
                <CircularProgressbar
                    value={param.barValue}
                    text={`${param.barValue}%`} />
                <span>{param.title}</span>
            </div>
            <div className="detail">
                <Png />
                <span>${param.Value}</span>
                <span>Last 24 hours</span>
            </div>
        </motion.div>
    )
}
function ExpendedCard({ param, setExpended }) {
    const data = {
        options: {
            chart: {
                type: "area",
                height: "auto",
            },
            dropShadow: {
                enabled: false,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 3,
                color: "#000",
                opacity: 0.35,
            },
            fill: {
                colors: ["#fff"],
                type: 'gradient',
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: "smooth",
                colors: ["white"],
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm',
                },
            },
            grid: {
                show: true,
            },
            xaxis: {
                type: 'datetime',
                categories: [
                    "2018-09-19T00:00:00.000Z",
                    "2018-09-19T01:30:00.000Z",
                    "2018-09-19T02:30:00.000Z",
                    "2018-09-19T03:30:00.000Z",
                    "2018-09-19T04:30:00.000Z",
                    "2018-09-19T05:30:00.000Z",
                    "2018-09-19T06:30:00.000Z",
                ],
            },
        }
    }
    return (
        <motion.div className="ExpendedCard"
            style={{
                background: param.color.backGround,
                boxShadow: param.color.boxShadow
            }}
            layoutId='expandableCard'
        >
            <div style={{
                alignSelf: 'flex-end',
                cursor: 'pointer',
                color: 'white',
            }}>
                <UilTimes onClick={setExpended}
                />
            </div>
            <span>{param.title}</span>
            <div className="chartContainer">
                <Chart series={param.series} type='area' options={data.options} />
            </div>
            <span>Last 24 hours</span>
        </motion.div>
    )
}

export default Card