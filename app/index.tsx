import { View, Text, useColorScheme, Pressable, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import DeviceCard from '@/components/DeviceCard';
import { Link } from 'expo-router';
import devices from '@/constants/devices';

export default function HomeScreen() {
	const colorScheme = useColorScheme();
	
	return (
		<SafeAreaView className='flex-1 bg-white dark:bg-black'>
			<View className='flex-row justify-between items-center my-6 mx-6'>
				<View className='flex-row'>
					<MaterialCommunityIcons
						name='dots-grid'
						size={40}
						color={colorScheme === 'dark' ? 'white' : 'black'}
					/>
				</View>

				<Pressable onPress={() => (colorScheme === 'dark' ? 'light' : 'dark')}>
					<Feather
						name={colorScheme === 'dark' ? 'moon' : 'sun'}
						size={34}
						color={colorScheme === 'dark' ? 'white' : 'black'}
					/>
				</Pressable>
			</View>
			<View className='my-2 mx-6'>
				<Text
					className='text-xl text-gray-700 dark:text-gray-200'
					style={{ fontFamily: 'BebasNeue' }}>
					Welcome home
				</Text>
				<Text
					className='text-6xl my-2 dark:text-white'
					style={{ fontFamily: 'BebasNeue' }}>
					John Doe
				</Text>
			</View>
			<View className='mx-6 my-2 flex-row justify-between items-baseline'>
				<Text className='text-2xl font-semibold dark:text-white'>
					Smart Devices
				</Text>
				<Link href={'/all-devices'}>
					<Text className='text-lg dark:text-white'>View all</Text>
				</Link>
			</View>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View className='flex-1 flex-row flex-wrap justify-between mx-3 my-2'>
					{devices.map(item => (
						<DeviceCard key={item.name} icon={item.icon} name={item.name} />
					))}
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
