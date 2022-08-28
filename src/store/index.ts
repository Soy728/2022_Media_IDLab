import axios from 'axios';
import _ from 'lodash';

import { writable } from 'svelte/store';

export const priceData = writable<PriceUnit[]>([]);
export const denomData = writable<string[]>([]);

function getUrl(days: number) {
	return `https://dashboard-mintscan.s3.ap-northeast-2.amazonaws.com/research/market/${days}.csv`;
}

export interface PriceUnit {
	denom: string;
	timestamp: number;
	price: number;
	marketCap: number;
	dayVolume: number;
}

export async function updateData(days: number) {
	const data = (await axios.get<string>(getUrl(days))).data;
	const prices = _(data.split('\n'))
		.drop(1)
		.map((a) => {
			const eles = a.split(',');
			return {
				denom: eles[0],
				timestamp: Number(eles[1]),
				price: Number(eles[2]),
				marketCap: Number(eles[3]),
				dayVolume: Number(eles[4])
			} as PriceUnit;
		})
		.value();
	priceData.set(prices);
}

export async function updateDenom(days: number) {
	const data = (await axios.get<string>(getUrl(days))).data;
	const prices = _(data.split('\n'))
		.drop(1)
		.map((a) => {
			const eles = a.split(',');
			return eles[0];
		})
		.value();
		denomData.set(prices);
}
