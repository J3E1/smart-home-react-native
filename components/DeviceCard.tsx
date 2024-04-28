import { View, Text, Switch, Pressable, useColorScheme } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
export default function DeviceCard({
	name,
	icon,
}: {
	name: string;
	icon: string;
}) {
	const colorScheme = useColorScheme();
	const [isActive, setIsActive] = useState(false);
	const toggleSwitch = () => setIsActive(previousState => !previousState);

	return (
		<View className='w-1/2 p-3'>
			<Pressable
				onPress={toggleSwitch}
				className={`h-56 ${
					isActive ? 'bg-black dark:bg-neutral-200' : 'bg-slate-100 dark:bg-neutral-800'
				} justify-between items-start rounded-3xl py-4 px-6`}>
				<View className='mt-8'>
					<MaterialCommunityIcons
						// @ts-ignore
						name={icon}
						size={50}
						color={
							colorScheme === 'dark'
								? isActive
									? 'black'
									: 'white'
								: isActive
								? 'white'
								: 'black'
						}
					/>
				</View>
				<View className='flex-row justify-between'>
					<View>
						<Text
							className={`${
								!isActive ? 'text-black dark:text-slate-100' : 'text-slate-100 dark:text-black'
							} text-xl font-semibold`}>
							Smart
						</Text>
						<Text
							className={`${
								!isActive ? 'text-black dark:text-slate-100' : 'text-slate-100 dark:text-black'
							} text-xl font-semibold`}>
							{name}
						</Text>
					</View>
					<View className=''>
						<Switch
							trackColor={{ false: '#767577', true: 'rgb(241 245 249)' }}
							className='ml-6 rotate-90'
							onValueChange={toggleSwitch}
							value={isActive}
						/>
					</View>
				</View>
			</Pressable>
		</View>
	);
}
