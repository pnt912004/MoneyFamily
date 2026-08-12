import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import { Text, useTheme, Surface, Button, Switch, IconButton } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { spacing, borderRadius } from '../../theme/theme';

const MEMBERS = [
  {
    id: '1',
    name: 'Minh Trí (Bạn)',
    role: 'Trưởng quỹ',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdARvEEePJPI71SgCh3MhgnxCf1S89v45p_3G8131zKvTVfpxQDqNdEQpCzCIP9ENmIjLrMr5n6mymoKF57IHB7jZaBQ99DjYKmYnqy_dc_7EOTctXpyIUfKdidqw5fdyj07Lx4renMK9P41mgXAOIcc1m-fOeIRA1n4wNuEzyDOpoFoLSWyefZPYatnMbbXFnYamOy1StvoeuCyfmq91G0Qkwi4nIxO7zGO5MnkObdthVF9LL_Eoa',
    canEdit: true,
    isOwner: true,
  },
  {
    id: '2',
    name: 'Lan Anh',
    role: 'Thành viên',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCb_nPhHg0N7f8ZvLCqPjaHtoUxf4-LH4RBJv1YtB8CwHj_JIplZ2Pu5OHjGcKq2C4x7yDLViY6mzFUMHo-h9ywHivP7ON_bqQ2xomVcjoVC_R9L4M-IgKgJ0t5jN6xrhjXVLkxgfuacKuxIS0W0ICrkLBx5-UwLGugseziiWSr5FSyjYM4IC2xNZE-YQx_c9tBKaTJkV9axUsAJMOvRZiGv6UtaZri3HyMRbJY-WL-g5tH8-9Eh9Ht',
    canEdit: true,
    isOwner: false,
  },
  {
    id: '3',
    name: 'Bà Nội',
    role: 'Thành viên',
    avatar: null, // text fallback
    canEdit: false,
    isOwner: false,
  }
];

export default function FundScreen() {
  const theme = useTheme();
  const [members, setMembers] = useState(MEMBERS);

  const toggleEditPermission = (id: string) => {
    setMembers(members.map(m => m.id === id ? { ...m, canEdit: !m.canEdit } : m));
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* Header */}
        <View style={styles.header}>
          <Text variant="headlineSmall" style={{ color: theme.colors.onBackground, fontFamily: 'BeVietnamPro_700Bold' }}>
            Quỹ Gia Đình
          </Text>
          <Text variant="bodyMedium" style={{ color: theme.colors.onSurfaceVariant, marginTop: spacing.xs }}>
            Quản lý thành viên và mời người thân tham gia quỹ.
          </Text>
        </View>

        {/* Invite Card */}
        <Surface style={[styles.inviteCard, { backgroundColor: theme.colors.surface, borderRadius: borderRadius.xl }]} elevation={1}>
          <Text variant="titleMedium" style={{ color: theme.colors.onBackground, fontFamily: 'BeVietnamPro_600SemiBold', marginBottom: spacing.md }}>
            Mã mời gia đình
          </Text>
          
          <View style={[styles.qrContainer, { backgroundColor: theme.colors.surfaceVariant }]}>
            <Image 
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbSec7A8GkH1l_-7blAK2tkTAGGTdr68dMo8aepF-3VZdC2Vg9jlHCdDHL76xX3r8fu2DIxtJ-h_m2hVwVaaVtFHntMjx5iQUGEIQqxibjzpW59kytNJCDzzLYHVPagVdQ3w7oDtc264K43oy_KiAfRkaFrSQQn29Yis3CB5yTEZTOwPA9qw-fGKwcdC_bVtNtyrWm9rPqzUsoJY2xG9ma5hq8sSb_b25EHUN-0ViLSCXnBPgw_r0s' }}
              style={styles.qrImage}
              resizeMode="cover"
            />
          </View>

          <Text variant="bodySmall" style={{ color: theme.colors.onSurfaceVariant, textAlign: 'center', marginBottom: spacing.md, paddingHorizontal: spacing.md }}>
            Quét mã QR này hoặc chia sẻ liên kết để mời thành viên mới.
          </Text>

          <Button
            mode="contained"
            icon="content-copy"
            onPress={() => {}}
            style={styles.copyButton}
            contentStyle={{ paddingVertical: 4 }}
            labelStyle={{ fontFamily: 'BeVietnamPro_600SemiBold' }}
            theme={{ roundness: borderRadius.full }}
          >
            Sao chép link mời
          </Button>
        </Surface>

        {/* Members List */}
        <View style={styles.listSection}>
          <Text variant="titleMedium" style={{ color: theme.colors.onBackground, fontFamily: 'BeVietnamPro_600SemiBold', marginBottom: spacing.md }}>
            Thành viên ({members.length})
          </Text>

          {members.map(member => (
            <Surface key={member.id} style={[styles.memberItem, { backgroundColor: theme.colors.surface, borderRadius: borderRadius.xl }]} elevation={1}>
              <View style={styles.memberLeft}>
                {member.avatar ? (
                  <Image source={{ uri: member.avatar }} style={styles.avatar} />
                ) : (
                  <View style={[styles.avatarFallback, { backgroundColor: theme.colors.surfaceVariant }]}>
                    <Text style={{ fontSize: 20, fontFamily: 'BeVietnamPro_600SemiBold', color: theme.colors.onSurfaceVariant }}>
                      {member.name.charAt(0)}
                    </Text>
                  </View>
                )}
                
                <View>
                  <Text style={{ fontFamily: 'BeVietnamPro_600SemiBold', fontSize: 16, color: theme.colors.onBackground }}>
                    {member.name}
                  </Text>
                  {member.isOwner ? (
                    <View style={[styles.roleBadge, { backgroundColor: theme.colors.primaryContainer }]}>
                      <Text style={{ fontSize: 12, fontFamily: 'BeVietnamPro_600SemiBold', color: theme.colors.primary }}>
                        {member.role}
                      </Text>
                    </View>
                  ) : (
                    <Text style={{ fontSize: 14, color: theme.colors.onSurfaceVariant, marginTop: 2 }}>
                      {member.role}
                    </Text>
                  )}
                </View>
              </View>

              {!member.isOwner && (
                <View style={styles.memberRight}>
                  <Text style={{ fontSize: 12, fontFamily: 'BeVietnamPro_600SemiBold', color: theme.colors.onSurfaceVariant, marginBottom: 4 }}>
                    Quyền chỉnh sửa
                  </Text>
                  <Switch 
                    value={member.canEdit} 
                    onValueChange={() => toggleEditPermission(member.id)}
                    color={theme.colors.primary}
                  />
                </View>
              )}
            </Surface>
          ))}
        </View>

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
    paddingBottom: 100,
  },
  header: {
    marginBottom: spacing.lg,
  },
  inviteCard: {
    alignItems: 'center',
    padding: spacing.lg,
    marginBottom: spacing.xl,
  },
  qrContainer: {
    width: 200,
    height: 200,
    borderRadius: borderRadius.lg,
    overflow: 'hidden',
    marginBottom: spacing.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
  qrImage: {
    width: '100%',
    height: '100%',
  },
  copyButton: {
    width: '100%',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 20,
  },
  listSection: {
    marginTop: spacing.sm,
  },
  memberItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: spacing.md,
    marginBottom: spacing.sm,
  },
  memberLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  avatarFallback: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  roleBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    marginTop: 4,
  },
  memberRight: {
    alignItems: 'flex-end',
  },
});
