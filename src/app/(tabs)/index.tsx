import React from 'react';
import { View, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Text, useTheme, ProgressBar, IconButton, Surface } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { spacing, borderRadius } from '../../theme/theme';

export default function HomeScreen() {
  const theme = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Image 
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdLHYSohqv3aZl6S3_lrD0STAP296ubGRnoo49StQbTskY7preNsvosXRzKlcOHfj32vdMnb6YGNB2x7N4uE-fEvoL0iV0Upcqstnr_JKkVAFD8lhZDX_OrmR1VxBQYwp28LiotbSJ7PgYFEDE5efYB4BNUqtdSjvHo828yv5Pf-fE8nVTx7qzNaGVJjj1loGOcd73fbh0OZZkGIpOSdKAtDlJ7_-YP4nMNj84mrY3GMSfMqAIHXiU' }}
              style={[styles.avatar, { borderColor: theme.colors.primaryContainer }]}
            />
            <Text variant="headlineSmall" style={[styles.headerTitle, { color: theme.colors.primary }]}>MoneyFamily</Text>
          </View>
          <IconButton 
            icon="bell-outline" 
            iconColor={theme.colors.primary} 
            size={24} 
            onPress={() => {}} 
          />
        </View>

        {/* Overview Section */}
        <View style={styles.section}>
          <Text variant="titleMedium" style={{ color: theme.colors.onSurfaceVariant, fontFamily: 'BeVietnamPro_600SemiBold' }}>Tổng quan tuần này</Text>
          <Text variant="bodySmall" style={{ color: theme.colors.outline, fontFamily: 'BeVietnamPro_400Regular' }}>12 Thg 10 - 18 Thg 10</Text>
        </View>

        {/* Balance Card */}
        <Surface style={[styles.balanceCard, { backgroundColor: theme.colors.surface, borderRadius: borderRadius.xl }]} elevation={2}>
          <View style={styles.balanceHeader}>
            <View>
              <Text variant="bodySmall" style={{ color: theme.colors.onSurfaceVariant, fontFamily: 'BeVietnamPro_400Regular' }}>Số dư hiện tại</Text>
              <Text variant="displaySmall" style={{ color: theme.colors.onBackground, fontFamily: 'BeVietnamPro_700Bold' }}>12.500.000₫</Text>
            </View>
            <View style={[styles.statusBadge, { backgroundColor: theme.colors.surfaceVariant }]}>
              <View style={[styles.statusDot, { backgroundColor: theme.colors.primary }]} />
              <Text variant="labelMedium" style={{ color: theme.colors.onSurfaceVariant, fontFamily: 'BeVietnamPro_600SemiBold' }}>Đang tốt</Text>
            </View>
          </View>

          <View style={styles.progressSection}>
            <View style={styles.progressRow}>
              <Text variant="bodySmall" style={{ color: theme.colors.onSurfaceVariant, fontFamily: 'BeVietnamPro_400Regular' }}>
                Đã tiêu: <Text style={{ fontFamily: 'BeVietnamPro_700Bold', color: theme.colors.onBackground }}>4.500.000₫</Text>
              </Text>
              <Text variant="bodySmall" style={{ color: theme.colors.outline, fontFamily: 'BeVietnamPro_400Regular' }}>Hạn mức: 8.000.000₫</Text>
            </View>
            <ProgressBar progress={0.56} color={theme.colors.primary} style={styles.progressBar} />
            <Text variant="labelMedium" style={{ color: theme.colors.primary, textAlign: 'right', marginTop: 4, fontFamily: 'BeVietnamPro_600SemiBold' }}>Còn lại 3.500.000₫</Text>
          </View>
        </Surface>

        {/* Smart Suggestion */}
        <Surface style={[styles.suggestionCard, { backgroundColor: 'rgba(253, 211, 77, 0.3)', borderColor: 'rgba(253, 211, 77, 0.5)', borderRadius: borderRadius.xl }]} elevation={0}>
          <View style={styles.suggestionIconContainer}>
            <IconButton icon="lightbulb" iconColor={theme.colors.secondary} size={20} style={{ margin: 0 }} />
          </View>
          <Text variant="titleMedium" style={{ color: theme.colors.onBackground, fontFamily: 'BeVietnamPro_600SemiBold', marginTop: 8 }}>Gợi ý thông minh</Text>
          <Text variant="bodySmall" style={{ color: theme.colors.onSurfaceVariant, fontFamily: 'BeVietnamPro_400Regular', marginTop: 4 }}>
            Bạn đang dư 500k so với kế hoạch, chuyển vào Quỹ du lịch nhé?
          </Text>
          <TouchableOpacity style={[styles.suggestionButton, { backgroundColor: theme.colors.secondary }]}>
            <Text style={[styles.suggestionButtonText, { color: theme.colors.onSecondary }]}>Chuyển ngay</Text>
          </TouchableOpacity>
        </Surface>

        {/* Quick Entry */}
        <View style={[styles.section, { marginTop: spacing.lg }]}>
          <Text variant="titleMedium" style={{ color: theme.colors.onBackground, fontFamily: 'BeVietnamPro_600SemiBold', marginBottom: spacing.sm }}>
            Nhập liệu siêu tốc
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.quickEntryScroll}>
            
            <QuickEntryItem icon="cart" label="Đi chợ sáng" bgColor="#E3F2FD" iconColor="#1976D2" />
            <QuickEntryItem icon="coffee" label="Sữa cho con" bgColor="#FFF3E0" iconColor="#F57C00" />
            <QuickEntryItem icon="car" label="Đổ xăng" bgColor="#E8F5E9" iconColor="#388E3C" />
            <QuickEntryItem icon="heart" label="Mua sắm" bgColor="#FCE4EC" iconColor="#C2185B" />
            
            <TouchableOpacity style={[styles.quickEntryCard, { backgroundColor: theme.colors.surfaceVariant, borderStyle: 'dashed', borderWidth: 1, borderColor: theme.colors.outline }]}>
              <View style={[styles.quickEntryIcon, { backgroundColor: 'transparent' }]}>
                <IconButton icon="plus" size={24} iconColor={theme.colors.onSurfaceVariant} style={{ margin: 0 }} />
              </View>
              <Text variant="labelMedium" style={{ color: theme.colors.onSurfaceVariant, fontFamily: 'BeVietnamPro_600SemiBold' }}>Thêm mẫu</Text>
            </TouchableOpacity>

          </ScrollView>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

function QuickEntryItem({ icon, label, bgColor, iconColor }: { icon: string, label: string, bgColor: string, iconColor: string }) {
  const theme = useTheme();
  return (
    <TouchableOpacity style={[styles.quickEntryCard, { backgroundColor: theme.colors.surface }]}>
      <View style={[styles.quickEntryIcon, { backgroundColor: bgColor }]}>
        <IconButton icon={icon} size={24} iconColor={iconColor} style={{ margin: 0 }} />
      </View>
      <Text variant="labelMedium" style={{ color: theme.colors.onBackground, fontFamily: 'BeVietnamPro_600SemiBold', textAlign: 'center' }} numberOfLines={1}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: spacing.marginMobile,
    paddingBottom: 100, // Leave space for bottom tabs
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
  },
  headerTitle: {
    fontFamily: 'BeVietnamPro_700Bold',
  },
  section: {
    marginBottom: spacing.lg,
  },
  balanceCard: {
    padding: spacing.lg,
    marginBottom: spacing.lg,
  },
  balanceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing.md,
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 16,
    gap: 4,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  progressSection: {
    marginTop: spacing.sm,
  },
  progressRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  progressBar: {
    height: 8,
    borderRadius: 4,
  },
  suggestionCard: {
    padding: spacing.lg,
    borderWidth: 1,
  },
  suggestionIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(115, 92, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  suggestionButton: {
    marginTop: spacing.md,
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
  suggestionButtonText: {
    fontFamily: 'BeVietnamPro_600SemiBold',
    fontSize: 14,
  },
  quickEntryScroll: {
    gap: spacing.sm,
    paddingBottom: 8,
  },
  quickEntryCard: {
    width: 100,
    padding: spacing.sm,
    borderRadius: borderRadius.lg,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
  },
  quickEntryIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
});
