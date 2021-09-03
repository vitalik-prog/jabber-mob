import React from 'react'
import { Image, TouchableOpacity, View, ViewStyle } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Heading, HeadingType, PlainText } from 'src/components'
import { getFormattedDate, DateFormatType } from 'src/helpers'
import { NavigationScreen } from 'src/common/enums'
import { HomeScreenNavigationProp } from 'src/screens/Home/common/types'
import TimeIcon from 'src/assets/images/time.svg'
import styles from './styles'

type Props = {
  id: number
  title: string
  author: string
  date: string
  source?: string
  style?: ViewStyle
}

const RecentlyPlayedCard: React.FC<Props> = ({
  id,
  title,
  author,
  date,
  source,
  style
}) => {
  const navigation = useNavigation<HomeScreenNavigationProp>()

  const handlePress = () => {
    navigation.navigate(NavigationScreen.EPISODE, { id })
  }

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.container, style]}
      onPress={handlePress}
    >
      <Image source={{ uri: source }} style={styles.image} />
      <View>
        <Heading label={title} type={HeadingType.SMALL} numberOfLines={2} />
        <PlainText label={author} style={styles.author} />
        <View style={styles.date}>
          <TimeIcon width={10} />
          <PlainText
            label={getFormattedDate(
              date,
              DateFormatType.MONTH_DAY_HOURS_MINUTES
            )}
            style={styles.time}
          />
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default RecentlyPlayedCard
