import DeviceRow from '@/components/DeviceRow';
import devices from '@/constants/devices';
import {
	AntDesign,
	MaterialCommunityIcons,
	Octicons,
} from '@expo/vector-icons';
import { Link } from 'expo-router';
import { View, Text, useColorScheme, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function AllDevicesScreen() {
	const colorScheme = useColorScheme();
	return (
		<SafeAreaView className='flex-1 bg-white dark:bg-black'>
			<View className='flex-row justify-between items-center my-6 mx-6'>
				<Link href={'/'}>
					<AntDesign
						name='left'
						size={34}
						color={colorScheme === 'dark' ? 'white' : 'black'}
					/>
				</Link>
				<Link href={'/'}>
					<MaterialCommunityIcons
						name='dots-vertical'
						size={34}
						color={colorScheme === 'dark' ? 'white' : 'black'}
					/>
				</Link>
			</View>
			<View className='my-2 mx-6 flex-row justify-between items-center'>
				<View>
					<Text className='text-4xl font-bold text-gray-900 dark:text-gray-200'>
						Devices
					</Text>
					<Text className='text-xl my-2 text-gray-700/70 dark:text-gray-200/70'>
						Connected
					</Text>
				</View>
				<View className='flex-row items-center gap-4'>
					<Text className='text-xl font-bold text-gray-700 dark:text-gray-200'>
						On
					</Text>
					<Octicons
						name='dot-fill'
						size={50}
						color={colorScheme === 'dark' ? 'white' : 'black'}
					/>
				</View>
			</View>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View className='mx-6 my-2'>
					{devices.map((item, i) => (
						<DeviceRow
							key={item.name}
							item={item}
							last={i === devices.length - 1}
						/>
					))}
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
