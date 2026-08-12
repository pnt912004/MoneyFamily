import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Text, useTheme, Surface, IconButton, Switch, ProgressBar } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { spacing, borderRadius } from '../../theme/theme';

export default function LimitScreen() {
  const theme = useTheme();

  const [alerts, setAlerts] = useState({
    eightyPercent: true,
    weekendReport: true,
    unusualSpending: false,
  });

  const toggleAlert = (key: keyof typeof alerts) => {
    setAlerts(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* Header */}
        <View style={styles.header}>
          <Text variant="headlineSmall" style={{ color: theme.colors.onBackground, fontFamily: 'BeVietnamPro_700Bold' }}>
            Mục tiêu & Hạn mức
          </Text>
          <Text variant="bodyLarge" style={{ color: theme.colors.onSurfaceVariant, marginTop: spacing.xs }}>
            Quản lý chi tiêu và lên kế hoạch cho gia đình.
          </Text>
        </View>

        {/* Notification */}
        <Surface style={[styles.notificationCard, { backgroundColor: 'rgba(186, 26, 26, 0.1)', borderColor: 'rgba(186, 26, 26, 0.3)', borderRadius: borderRadius.xl }]} elevation={0}>
          <IconButton icon="alert" iconColor={theme.colors.error} size={24} style={{ margin: 0, marginRight: 8 }} />
          <View style={{ flex: 1 }}>
            <Text style={{ fontFamily: 'BeVietnamPro_600SemiBold', color: theme.colors.error, fontSize: 16 }}>
              Thông báo hạn mức
            </Text>
            <Text style={{ color: theme.colors.onSurfaceVariant, fontSize: 14, marginTop: 4 }}>
              Tuần trước hụt 200k, đã trừ vào hạn mức tuần này.
            </Text>
          </View>
        </Surface>

        {/* Weekly Limit */}
        <Surface style={[styles.card, { backgroundColor: theme.colors.surface, borderRadius: borderRadius.xl }]} elevation={1}>
          <View style={styles.cardHeader}>
            <Text variant="titleMedium" style={{ color: theme.colors.onBackground, fontFamily: 'BeVietnamPro_600SemiBold' }}>Hạn mức tuần</Text>
            <IconButton icon="pencil" iconColor={theme.colors.primary} size={20} />
          </View>
          
          <View style={styles.progressSection}>
            <View style={styles.progressLabels}>
              <Text style={{ color: theme.colors.onSurfaceVariant, fontSize: 14 }}>Đã chi: 1.500.000đ</Text>
              <Text style={{ color: theme.colors.primary, fontFamily: 'BeVietnamPro_600SemiBold', fontSize: 14 }}>Còn lại: 3.300.000đ</Text>
            </View>
            <ProgressBar progress={0.31} color={theme.colors.primary} style={styles.progressBar} />
            <Text style={{ color: theme.colors.onSurfaceVariant, fontSize: 12, textAlign: 'right', marginTop: 8 }}>
              Tổng: 4.800.000đ (Đã điều chỉnh)
            </Text>
          </View>

          <View style={styles.categoriesSection}>
            <Text style={{ color: theme.colors.onSurfaceVariant, fontSize: 12, fontFamily: 'BeVietnamPro_600SemiBold', textTransform: 'uppercase', marginBottom: 8 }}>
              Danh mục chi tiêu chính
            </Text>
            <View style={styles.chipContainer}>
              <View style={[styles.chip, { backgroundColor: 'rgba(253, 211, 77, 0.3)' }]}>
                <IconButton icon="silverware-fork-knife" size={16} iconColor="#725b00" style={{ margin: 0, width: 16, height: 16, marginRight: 4 }} />
                <Text style={{ color: '#725b00', fontSize: 12, fontFamily: 'BeVietnamPro_600SemiBold' }}>Ăn uống</Text>
              </View>
              <View style={[styles.chip, { backgroundColor: 'rgba(101, 169, 105, 0.3)' }]}>
                <IconButton icon="cart" size={16} iconColor="#003b11" style={{ margin: 0, width: 16, height: 16, marginRight: 4 }} />
                <Text style={{ color: '#003b11', fontSize: 12, fontFamily: 'BeVietnamPro_600SemiBold' }}>Siêu thị</Text>
              </View>
            </View>
          </View>
        </Surface>

        {/* Smart Alerts */}
        <Surface style={[styles.card, { backgroundColor: theme.colors.surface, borderRadius: borderRadius.xl }]} elevation={1}>
          <Text variant="titleMedium" style={{ color: theme.colors.onBackground, fontFamily: 'BeVietnamPro_600SemiBold', marginBottom: spacing.md }}>
            Cảnh báo thông minh
          </Text>
          
          <AlertToggle 
            title="Cảnh báo vượt 80%" 
            subtitle="Nhắc nhở khi sắp hết hạn mức" 
            value={alerts.eightyPercent} 
            onToggle={() => toggleAlert('eightyPercent')} 
          />
          <AlertToggle 
            title="Báo cáo cuối tuần" 
            subtitle="Tổng kết chi tiêu vào Chủ nhật" 
            value={alerts.weekendReport} 
            onToggle={() => toggleAlert('weekendReport')} 
          />
          <AlertToggle 
            title="Cảnh báo chi tiêu bất thường" 
            subtitle="Phát hiện khoản chi lớn bất ngờ" 
            value={alerts.unusualSpending} 
            onToggle={() => toggleAlert('unusualSpending')} 
          />
        </Surface>

        {/* Goals */}
        <View style={styles.goalsHeader}>
          <Text variant="titleMedium" style={{ color: theme.colors.onBackground, fontFamily: 'BeVietnamPro_600SemiBold' }}>Quỹ gia đình</Text>
          <TouchableOpacity style={styles.addGoalBtn}>
            <IconButton icon="plus" size={16} iconColor={theme.colors.primary} style={{ margin: 0 }} />
            <Text style={{ color: theme.colors.primary, fontFamily: 'BeVietnamPro_600SemiBold', fontSize: 12 }}>THÊM QUỸ</Text>
          </TouchableOpacity>
        </View>

        <GoalItem 
          title="Quỹ tiết kiệm" 
          target="Mục tiêu: 100.000.000đ" 
          current="Đã gom: 45.000.000đ" 
          progress={0.45} 
          percent="45%" 
          icon="piggy-bank" 
          iconBg="rgba(101, 169, 105, 0.2)" 
          iconColor="#286b33" 
        />
        <GoalItem 
          title="Quỹ du lịch" 
          target="Mục tiêu: 30.000.000đ" 
          current="Đã gom: 4.500.000đ" 
          progress={0.15} 
          percent="15%" 
          icon="airplane" 
          iconBg="rgba(253, 211, 77, 0.2)" 
          iconColor="#735c00" 
        />

      </ScrollView>
    </SafeAreaView>
  );
}

function AlertToggle({ title, subtitle, value, onToggle }: any) {
  const theme = useTheme();
  return (
    <View style={styles.alertRow}>
      <View style={{ flex: 1 }}>
        <Text style={{ fontFamily: 'BeVietnamPro_600SemiBold', fontSize: 16, color: theme.colors.onBackground }}>{title}</Text>
        <Text style={{ color: theme.colors.onSurfaceVariant, fontSize: 14 }}>{subtitle}</Text>
      </View>
      <Switch value={value} onValueChange={onToggle} color={theme.colors.primary} />
    </View>
  );
}

function GoalItem({ title, target, current, progress, percent, icon, iconBg, iconColor }: any) {
  const theme = useTheme();
  return (
    <Surface style={[styles.goalCard, { backgroundColor: theme.colors.surface, borderRadius: borderRadius.xl }]} elevation={1}>
      <View style={[styles.goalIcon, { backgroundColor: iconBg }]}>
        <IconButton icon={icon} size={24} iconColor={iconColor} style={{ margin: 0 }} />
      </View>
      <View style={{ flex: 1 }}>
        <View style={styles.goalTitleRow}>
          <View>
            <Text style={{ fontFamily: 'BeVietnamPro_600SemiBold', fontSize: 16, color: theme.colors.onBackground }}>{title}</Text>
            <Text style={{ color: theme.colors.onSurfaceVariant, fontSize: 14 }}>{target}</Text>
          </View>
          <View style={[styles.percentBadge, { backgroundColor: iconBg }]}>
            <Text style={{ color: iconColor, fontFamily: 'BeVietnamPro_600SemiBold', fontSize: 12 }}>{percent}</Text>
          </View>
        </View>
        <ProgressBar progress={progress} color={iconColor} style={{ height: 8, borderRadius: 4, marginVertical: 8, backgroundColor: iconBg }} />
        <Text style={{ color: theme.colors.onSurfaceVariant, fontSize: 14, textAlign: 'right' }}>{current}</Text>
      </View>
    </Surface>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: spacing.marginMobile,
    paddingBottom: 100,
  },
  header: {
    marginBottom: spacing.lg,
  },
  notificationCard: {
    flexDirection: 'row',
    padding: spacing.md,
    borderWidth: 1,
    marginBottom: spacing.lg,
    alignItems: 'flex-start',
  },
  card: {
    padding: spacing.lg,
    marginBottom: spacing.lg,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  progressSection: {
    marginBottom: spacing.lg,
  },
  progressLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  progressBar: {
    height: 8,
    borderRadius: 4,
  },
  categoriesSection: {
    marginTop: spacing.sm,
  },
  chipContainer: {
    flexDirection: 'row',
    gap: 8,
    flexWrap: 'wrap',
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  alertRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  goalsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  addGoalBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 16,
    backgroundColor: 'rgba(0, 110, 28, 0.1)',
  },
  goalCard: {
    flexDirection: 'row',
    padding: spacing.md,
    marginBottom: spacing.md,
    alignItems: 'flex-start',
    gap: spacing.md,
  },
  goalIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  goalTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  percentBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
});
