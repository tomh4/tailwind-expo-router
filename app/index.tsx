import { FontAwesome } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import tw from 'twrnc';

export default function IndexPage() {
  const { t } = useTranslation();
  return (
    <View style={tw`pt-12`}>
      <View
        style={tw`p-4 items-center bg-white dark:bg-black shadow-lg mx-6 rounded-full flex flex-row gap-4`}
      >
        <FontAwesome name="qrcode" size={24} />
        <Text style={tw`text-gray-400 dark:text-white`}>|</Text>
        <Text style={tw`text-black dark:text-white grow`}>{t('search')}</Text>
        <FontAwesome
          style={tw`text-gray-400 dark:text-white mr-4`}
          name="filter"
          size={24}
        />
      </View>
    </View>
  );
}
