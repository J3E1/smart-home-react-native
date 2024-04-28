import React, {
	createContext,
	ReactElement,
	ReactNode,
	useContext,
	useState,
} from 'react';

export type Device = {
	icon: string;
	name: string;
	isOn: boolean;
};

type DeviceContextType = {
	devices: Device[];
	setDevices: React.Dispatch<React.SetStateAction<Device[]>>
};

const DeviceContext = createContext<DeviceContextType | undefined>(undefined);

function useDevices(): DeviceContextType {
	const context = useContext(DeviceContext);
	if (!context) {
		throw new Error('useDevices must be used within an DeviceProvider');
	}
	return context;
}

const DeviceProvider = (props: { children: ReactNode }): ReactElement => {
	const [devices, setDevices] = useState<Device[]>([
		{
			name: 'Light',
			icon: 'lamp',
			isOn: false,
		},
		{
			name: 'TV',
			icon: 'youtube-tv',
			isOn: false,
		},
		{
			name: 'AC',
			icon: 'air-conditioner',
			isOn: false,
		},
		{
			name: 'Fan',
			icon: 'fan',
			isOn: false,
		},
	]);

	const setDevice = (device: Device) => {
		setDevices(devices => {
			const index = devices.findIndex(d => d.name === device.name);
			let tempDevices = devices;
			tempDevices[index] = device;
			return tempDevices;
		});
	};

	return <DeviceContext.Provider value={{ devices, setDevices }} {...props}/>;
};

export { DeviceProvider, useDevices };
