import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { Text, useTheme, Button, IconButton } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { spacing, borderRadius } from '../../theme/theme';

const { width } = Dimensions.get('window');

const CATEGORIES = [
  { id: 'food', label: 'Food', icon: 'silverware-fork-knife' },
  { id: 'house', label: 'House', icon: 'home' },
  { id: 'kids', label: 'Kids', icon: 'baby-carriage' },
  { id: 'transport', label: 'Transport', icon: 'car' },
];

export default function AddScreen() {
  const theme = useTheme();
  const [amount, setAmount] = useState('0');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleNumpadPress = (val: string) => {
    if (val === 'backspace') {
      setAmount(prev => prev.length > 1 ? prev.slice(0, -1) : '0');
    } else {
      if (amount === '0') {
        setAmount(val === '000' ? '0' : val);
      } else {
        setAmount(prev => prev + val);
      }
    }
  };

  const formattedAmount = parseInt(amount, 10).toLocaleString('vi-VN');

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* Header */}
        <View style={styles.header}>
          <Text variant="headlineSmall" style={[styles.headerTitle, { color: theme.colors.primary }]}>
            MoneyFamily
          </Text>
        </View>

        {/* Amount Display */}
        <View style={[styles.amountContainer, { backgroundColor: theme.colors.surface, elevation: 1 }]}>
          <Text variant="labelMedium" style={{ color: theme.colors.onSurfaceVariant, marginBottom: 8, letterSpacing: 1.5 }}>
            SỐ TIỀN
          </Text>
          <Text variant="displayMedium" style={{ color: theme.colors.primary, fontFamily: 'BeVietnamPro_700Bold' }}>
            {formattedAmount}<Text variant="titleMedium">đ</Text>
          </Text>
          <Text variant="bodySmall" style={{ color: theme.colors.outline, marginTop: 8 }}>
            Nhập số tiền để tiếp tục
          </Text>
        </View>

        {/* OCR Scan Button */}
        <View style={styles.ocrContainer}>
          <Button
            mode="contained"
            icon="camera"
            onPress={() => {}}
            style={styles.ocrButton}
            contentStyle={{ paddingVertical: 8 }}
            labelStyle={{ fontFamily: 'BeVietnamPro_600SemiBold', fontSize: 16 }}
            theme={{ roundness: borderRadius.full }}
          >
            Chụp hóa đơn
          </Button>
        </View>

        {/* Categories */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoriesContainer}>
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <TouchableOpacity
                key={cat.id}
                onPress={() => setSelectedCategory(cat.id)}
                style={[
                  styles.categoryChip,
                  { 
                    backgroundColor: isSelected ? theme.colors.primaryContainer : theme.colors.surface,
                    borderColor: isSelected ? theme.colors.primary : 'transparent',
                    borderWidth: isSelected ? 2 : 0,
                  }
                ]}
              >
                <IconButton 
                  icon={cat.icon} 
                  size={16} 
                  iconColor={isSelected ? theme.colors.onPrimaryContainer : theme.colors.onSurface} 
                  style={{ margin: 0, marginRight: 4, width: 16, height: 16 }} 
                />
                <Text style={{ 
                  color: isSelected ? theme.colors.onPrimaryContainer : theme.colors.onSurface,
                  fontFamily: 'BeVietnamPro_600SemiBold'
                }}>
                  {cat.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {/* Numpad */}
        <View style={styles.numpadContainer}>
          {['1', '2', '3', '4', '5', '6', '7', '8', '9', '000', '0', 'backspace'].map((key) => (
            <TouchableOpacity
              key={key}
              onPress={() => handleNumpadPress(key)}
              style={[
                styles.numpadKey,
                { 
                  backgroundColor: theme.colors.surface,
                  opacity: key === '000' || key === 'backspace' ? 0.8 : 1
                }
              ]}
            >
              {key === 'backspace' ? (
                <IconButton icon="backspace-outline" size={24} iconColor={theme.colors.onSurfaceVariant} style={{ margin: 0 }} />
              ) : (
                <Text variant={key === '000' ? "titleLarge" : "headlineMedium"} style={{ color: theme.colors.onSurface, fontFamily: 'BeVietnamPro_400Regular' }}>
                  {key}
                </Text>
              )}
            </TouchableOpacity>
          ))}
        </View>

        {/* Submit Button */}
        <Button
          mode="contained"
          onPress={() => {}}
          disabled={amount === '0' || !selectedCategory}
          style={styles.submitButton}
          contentStyle={{ paddingVertical: 12 }}
          labelStyle={{ fontFamily: 'BeVietnamPro_600SemiBold', fontSize: 18 }}
          theme={{ roundness: borderRadius.full }}
        >
          Lưu
        </Button>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: spacing.marginMobile,
    alignItems: 'center',
    paddingBottom: 100,
  },
  header: {
    width: '100%',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  headerTitle: {
    fontFamily: 'BeVietnamPro_700Bold',
  },
  amountContainer: {
    width: '100%',
    maxWidth: 400,
    minHeight: 120,
    borderRadius: borderRadius.xl,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.lg,
    marginBottom: spacing.lg,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.04,
    shadowRadius: 20,
  },
  ocrContainer: {
    width: '100%',
    maxWidth: 400,
    marginBottom: spacing.xl,
  },
  ocrButton: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 30,
    elevation: 4,
  },
  categoriesContainer: {
    flexDirection: 'row',
    gap: spacing.sm,
    marginBottom: spacing.xl,
    paddingBottom: spacing.sm,
  },
  categoryChip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.full,
  },
  numpadContainer: {
    width: '100%',
    maxWidth: 400,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: spacing.xl,
  },
  numpadKey: {
    width: '31%', // roughly a third minus gap
    aspectRatio: 1,
    borderRadius: borderRadius.lg,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '3%',
  },
  submitButton: {
    width: '100%',
    maxWidth: 400,
  },
});
