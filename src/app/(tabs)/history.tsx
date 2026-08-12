import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Text, useTheme, Surface, IconButton, ProgressBar } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { spacing, borderRadius } from '../../theme/theme';

const MEMBERS = [
  { id: 'all', label: 'Tất cả', avatar: null },
  { id: 'dad', label: 'Bố', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFWHJtLgIUv4h9DwzdeFaJ-OzZq1EbfuGh4RyQ5YEVcQzka31Wk8cUDI8zjleUmt2lM-hMbd401XNJznmF1bG6AFiyHMncLiWx1TSX8RG0qTUDZExDSbg4CIWkVo3ISopmQpios39eEUA2owLUIedpZxKKYaRtZLjEwW3FjS9rffu6-5-RfEsq0Fc4TJ60yERJvG0PemTiQ5FK2bw1Lraa9wmb1mwqhvUVIRsRf245MN9tiMTAoM9r' },
  { id: 'mom', label: 'Mẹ', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgSUPqpvx-D1BFeJZxkKQ9z0YliPAK1gUztWkMGJ9E7GCl5s1rfT5mFAVyMt9RLW2CAlG87Nu0brsAB3bBL8UqlvNTe-emFix6Dpc3ayhXiDKbZYf2zWWkeNNc65AvtnPQdEXrM4l8hTl6NVV8lO0WARupcGhDXGLtHi1gnlB0UnhS4RH1gCgAwPg-DUSMriyrDriz9W_5R_QAIXLoqoLAKKoyarhYU1coGVA5AJMqvG0PLWnJvY9f' },
  { id: 'grandma', label: 'Bà Nội', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCw-xZybMvNzcixxnqD-J6chVErFMN0N-3HzzDsa0Zs9KhVgT3Y6pbVZ7Z4O2rECo8xFYh_8L8WMbCEyFQUAOYFtAvVP7Qk0ZXRpb0mxwf09gWpGfVZhG8C4oktRsTIba_mo9AkjWmN_aP1K4mxjWxuTb5lNN4_6_znmE-hgsCTFB_I5QM5XWakka7xkrGeuGzzVI_NqIE1aUYg6h0vNT5piN9YnOLO-d5L7Ob05yBtG51nV3TRm8mq' },
];

const WEEK_DAYS = [
  { day: 'T2', date: '14' },
  { day: 'T3', date: '15' },
  { day: 'T4', date: '16', isActive: true },
  { day: 'T5', date: '17' },
  { day: 'T6', date: '18' },
  { day: 'T7', date: '19' },
  { day: 'CN', date: '20' },
];

export default function HistoryScreen() {
  const theme = useTheme();
  const [selectedMember, setSelectedMember] = useState('all');

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        <View style={styles.header}>
          <Text variant="headlineMedium" style={{ color: theme.colors.onSurface, fontFamily: 'BeVietnamPro_700Bold' }}>
            Lịch sử & Phân tích
          </Text>
          <Text variant="bodyLarge" style={{ color: theme.colors.onSurfaceVariant, marginTop: spacing.xs }}>
            Xem lại các khoản chi tiêu của gia đình.
          </Text>
        </View>

        {/* Member Filters */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filterContainer}>
          {MEMBERS.map((member) => {
            const isSelected = selectedMember === member.id;
            return (
              <TouchableOpacity
                key={member.id}
                onPress={() => setSelectedMember(member.id)}
                style={[
                  styles.filterChip,
                  { backgroundColor: isSelected ? theme.colors.primary : theme.colors.surfaceVariant }
                ]}
              >
                {member.avatar && (
                  <Image source={{ uri: member.avatar }} style={styles.filterAvatar} />
                )}
                <Text style={{ 
                  color: isSelected ? theme.colors.onPrimary : theme.colors.onSurfaceVariant,
                  fontFamily: 'BeVietnamPro_600SemiBold',
                  fontSize: 12
                }}>
                  {member.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {/* Weekly Calendar */}
        <Surface style={[styles.calendarCard, { backgroundColor: theme.colors.surface, borderRadius: borderRadius.xl }]} elevation={1}>
          <View style={styles.calendarHeader}>
            <Text variant="titleMedium" style={{ color: theme.colors.onSurface, fontFamily: 'BeVietnamPro_600SemiBold' }}>
              Tháng 10, Tuần 3
            </Text>
            <View style={styles.calendarNav}>
              <IconButton icon="chevron-left" size={20} containerColor={theme.colors.surfaceVariant} iconColor={theme.colors.onSurfaceVariant} style={styles.navIcon} />
              <IconButton icon="chevron-right" size={20} containerColor={theme.colors.surfaceVariant} iconColor={theme.colors.onSurfaceVariant} style={styles.navIcon} />
            </View>
          </View>

          <View style={styles.daysRow}>
            {WEEK_DAYS.map((item, index) => (
              <View key={index} style={styles.dayCol}>
                <Text style={{ color: item.isActive ? theme.colors.primary : theme.colors.onSurfaceVariant, fontFamily: 'BeVietnamPro_600SemiBold', fontSize: 12, marginBottom: 4 }}>
                  {item.day}
                </Text>
                <TouchableOpacity
                  style={[
                    styles.dateCircle,
                    { 
                      backgroundColor: item.isActive ? theme.colors.primary : 'transparent',
                      shadowColor: item.isActive ? theme.colors.primary : 'transparent',
                      elevation: item.isActive ? 4 : 0
                    }
                  ]}
                >
                  <Text style={{ color: item.isActive ? theme.colors.onPrimary : theme.colors.onSurface, fontFamily: 'BeVietnamPro_600SemiBold', fontSize: 16 }}>
                    {item.date}
                  </Text>
                </TouchableOpacity>
                {item.isActive && <View style={[styles.activeDot, { backgroundColor: theme.colors.error }]} />}
              </View>
            ))}
          </View>

          <View style={[styles.dailySummary, { borderTopColor: theme.colors.surfaceVariant }]}>
            <View style={styles.summaryRow}>
              <Text style={{ color: theme.colors.onSurfaceVariant, fontSize: 14 }}>Tổng chi tiêu T4</Text>
              <Text style={{ color: theme.colors.onSurface, fontFamily: 'BeVietnamPro_600SemiBold', fontSize: 16 }}>1.250.000 đ</Text>
            </View>
            <ProgressBar progress={0.45} color={theme.colors.primary} style={styles.progressBar} />
          </View>
        </Surface>

        {/* Expense List */}
        <View style={styles.listSection}>
          <Text variant="titleMedium" style={{ color: theme.colors.onSurface, fontFamily: 'BeVietnamPro_600SemiBold', marginBottom: spacing.md }}>
            Thứ Tư, 16 Tháng 10
          </Text>

          <ExpenseItem 
            title="Đi siêu thị" 
            member="Bố" 
            time="10:30 Sáng" 
            amount="- 850.000 đ" 
            category="Thực phẩm" 
            icon="cart-outline" 
            iconBg="rgba(101, 169, 105, 0.2)" 
            iconColor="#286b33" 
          />
          <ExpenseItem 
            title="Ăn trưa" 
            member="Mẹ" 
            time="12:45 Trưa" 
            amount="- 120.000 đ" 
            category="Ăn uống" 
            icon="silverware-fork-knife" 
            iconBg="rgba(253, 211, 77, 0.3)" 
            iconColor="#735c00" 
          />
          <ExpenseItem 
            title="Mua thuốc" 
            member="Bà Nội" 
            time="15:00 Chiều" 
            amount="- 280.000 đ" 
            category="Sức khỏe" 
            icon="hospital-box-outline" 
            iconBg="#ffdad6" 
            iconColor="#ba1a1a" 
          />

        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

function ExpenseItem({ title, member, time, amount, category, icon, iconBg, iconColor }: any) {
  const theme = useTheme();
  return (
    <Surface style={[styles.expenseItem, { backgroundColor: theme.colors.surface, borderRadius: borderRadius.xl }]} elevation={1}>
      <View style={styles.expenseLeft}>
        <View style={[styles.expenseIcon, { backgroundColor: iconBg }]}>
          <IconButton icon={icon} size={24} iconColor={iconColor} style={{ margin: 0 }} />
        </View>
        <View>
          <Text style={{ fontFamily: 'BeVietnamPro_600SemiBold', fontSize: 16, color: theme.colors.onSurface }}>{title}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 2 }}>
            <Text style={{ fontSize: 12, color: theme.colors.onSurfaceVariant }}>{member}</Text>
            <View style={[styles.dot, { backgroundColor: theme.colors.outlineVariant }]} />
            <Text style={{ fontSize: 12, color: theme.colors.onSurfaceVariant }}>{time}</Text>
          </View>
        </View>
      </View>
      <View style={styles.expenseRight}>
        <Text style={{ fontFamily: 'BeVietnamPro_600SemiBold', fontSize: 16, color: theme.colors.error, marginBottom: 4 }}>
          {amount}
        </Text>
        <View style={[styles.categoryBadge, { backgroundColor: theme.colors.surfaceVariant }]}>
          <Text style={{ fontSize: 10, fontFamily: 'BeVietnamPro_600SemiBold', color: theme.colors.onSurfaceVariant }}>
            {category}
          </Text>
        </View>
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
  filterContainer: {
    flexDirection: 'row',
    gap: spacing.sm,
    marginBottom: spacing.lg,
    paddingBottom: 4,
  },
  filterChip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  filterAvatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 8,
  },
  calendarCard: {
    padding: spacing.lg,
    marginBottom: spacing.lg,
  },
  calendarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  calendarNav: {
    flexDirection: 'row',
    gap: 8,
  },
  navIcon: {
    margin: 0,
    width: 32,
    height: 32,
  },
  daysRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spacing.sm,
  },
  dayCol: {
    alignItems: 'center',
    flex: 1,
  },
  dateCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    marginTop: 4,
  },
  dailySummary: {
    marginTop: spacing.lg,
    borderTopWidth: 1,
    paddingTop: spacing.sm,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  progressBar: {
    height: 8,
    borderRadius: 4,
  },
  listSection: {
    marginTop: spacing.sm,
  },
  expenseItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: spacing.md,
    marginBottom: spacing.sm,
  },
  expenseLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  expenseIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    marginHorizontal: 6,
  },
  expenseRight: {
    alignItems: 'flex-end',
  },
  categoryBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
});
