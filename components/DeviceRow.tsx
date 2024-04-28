import devices from '@/constants/devices';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { View, Text, useColorScheme, Switch, Pressable } from 'react-native';
export default function DeviceRow({
	item,
	last,
}: {
	item: (typeof devices)[number];
	last: boolean;
}) {
	const colorScheme = useColorScheme();
	const [isActive, setIsActive] = useState(false);
	const toggleSwitch = () => setIsActive(previousState => !previousState);

	return (
		<Pressable
			onPress={toggleSwitch}
			className={`py-6 ${!last ? 'border-b-2 border-slate-300' : ''}`}>
			<View className='flex-row'>
				<View
					className={`${
						isActive ? 'bg-black dark:bg-neutral-200' : ''
					} h-28 justify-between items-center mr-4 rounded-3xl py-4 px-4`}>
					<MaterialCommunityIcons
						// @ts-ignore
						name={item.icon}
						size={40}
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
					<Text className='text-lg font-bold text-gray-200 dark:text-black '>
						{isActive ? 2 : ''}
					</Text>
				</View>
				<View className='py-2 flex-1'>
					<View className='flex-1 flex-row justify-between items-center'>
						<View>
							<Text className='text-gray-700/70 dark:text-gray-200/70'>
								{isActive ? 'Connected' : 'Not Connected'}
							</Text>
							<Text className='text-xl font-bold text-gray-900 dark:text-gray-200'>
								Smart {item.name}
							</Text>
						</View>
						<View className=''>
							<Switch
								trackColor={{ false: '#767577', true: 'rgb(241 245 249)' }}
								onValueChange={toggleSwitch}
								value={isActive}
								className=''
							/>
						</View>
					</View>
					<View className='flex-row my-2'>
						<>
							<View className='bg-slate-100 dark:bg-neutral-800 rounded-2xl mr-2'>
								<Text className='text-md text-gray-900 dark:text-gray-200 mx-3 my-1'>
									Bedroom
								</Text>
							</View>
							<View className='bg-slate-100 dark:bg-neutral-800 rounded-2xl'>
								<Text className='text-md text-gray-900 dark:text-gray-200 mx-3 my-1'>
									Living room
								</Text>
							</View>
						</>
					</View>
				</View>
			</View>
		</Pressable>
	);
}
