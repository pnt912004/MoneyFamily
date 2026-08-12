import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { Text, TextInput, Button, useTheme } from 'react-native-paper';
import { Link, useRouter } from 'expo-router';
import { spacing, borderRadius } from '../theme/theme';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';

export default function LoginScreen() {
  const theme = useTheme();
  const router = useRouter();
  const [contact, setContact] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    if (!contact || !password) {
      setError('Vui lòng nhập đầy đủ email và mật khẩu');
      return;
    }
    
    setLoading(true);
    setError('');
    try {
      await signInWithEmailAndPassword(auth, contact, password);
      // AuthContext will handle the redirect to (tabs)
    } catch (err: any) {
      setError('Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.surface }]}>
      <View style={styles.content}>
        {/* Mobile Header Image Placeholder */}
        <View style={styles.headerImageContainer}>
           <Image
             source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDU28OHCiRTBd_tu1krhHiEBudtNzvaHX4cuEdcxjwTLodOcRbYV1W2RTt1cDvhBR9OCuwKBQy3QHa8xw_X44v9jHObJUV4EuH4xwqMs0K2tzyZG3WC5o00wEjPnfeuUmnrkPm5O84g36V99YlHY6yKipKRMyCkFAQsm-cGSAYpS_GurIPvgj6x3KoT6Ip3qOD04ho-098_6tdKnaXYiiMbQdV97uCR-rB9zSlUu-p16jMo78MMGYC8' }}
             style={styles.headerImage}
           />
        </View>

        <View style={styles.headerTextContainer}>
          <Text variant="headlineSmall" style={[styles.title, { color: theme.colors.onSurface }]}>
            Chào mừng trở lại!
          </Text>
          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Đăng nhập để tiếp tục quản lý quỹ gia đình.
          </Text>
        </View>

        <View style={styles.form}>
          <TextInput
            mode="outlined"
            label="Email hoặc Số điện thoại"
            value={contact}
            onChangeText={setContact}
            left={<TextInput.Icon icon="account-outline" />}
            style={styles.input}
            outlineColor={theme.colors.outline}
            activeOutlineColor={theme.colors.primary}
            theme={{ roundness: borderRadius.lg }}
          />

          <TextInput
            mode="outlined"
            label="Mật khẩu"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={secureTextEntry}
            left={<TextInput.Icon icon="lock-outline" />}
            right={
              <TextInput.Icon
                icon={secureTextEntry ? 'eye-off-outline' : 'eye-outline'}
                onPress={() => setSecureTextEntry(!secureTextEntry)}
              />
            }
            style={styles.input}
            outlineColor={theme.colors.outline}
            activeOutlineColor={theme.colors.primary}
            theme={{ roundness: borderRadius.lg }}
          />

          <View style={styles.forgotPasswordContainer}>
            <TouchableOpacity>
              <Text style={[styles.forgotPasswordText, { color: theme.colors.primary }]}>
                Quên mật khẩu?
              </Text>
            </TouchableOpacity>
          </View>

          <Button
            mode="contained"
            onPress={handleLogin}
            loading={loading}
            disabled={loading}
            style={styles.loginButton}
            contentStyle={styles.buttonContent}
            labelStyle={styles.buttonLabel}
            theme={{ roundness: borderRadius.full }}
          >
            Đăng nhập
          </Button>

          {error ? <Text style={{ color: theme.colors.error, textAlign: 'center' }}>{error}</Text> : null}
        </View>

        <View style={styles.dividerContainer}>
          <View style={[styles.divider, { backgroundColor: theme.colors.surfaceVariant }]} />
          <Text style={[styles.dividerText, { color: theme.colors.outline }]}>hoặc</Text>
          <View style={[styles.divider, { backgroundColor: theme.colors.surfaceVariant }]} />
        </View>

        <Button
          mode="outlined"
          icon="qrcode-scan"
          onPress={() => {}}
          style={styles.qrButton}
          contentStyle={styles.buttonContent}
          labelStyle={styles.qrButtonLabel}
          textColor={theme.colors.onSurface}
          theme={{ roundness: borderRadius.full }}
        >
          Tham gia Quỹ qua Link/QR
        </Button>

        <View style={styles.footer}>
          <Text style={{ color: theme.colors.onSurfaceVariant, fontFamily: 'BeVietnamPro_400Regular' }}>
            Gia đình bạn chưa có quỹ?{' '}
          </Text>
          <Link href="/register" asChild>
            <TouchableOpacity>
              <Text style={[styles.registerLink, { color: theme.colors.primary }]}>
                Tạo quỹ mới
              </Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: spacing.marginMobile,
    justifyContent: 'center',
  },
  headerImageContainer: {
    alignItems: 'center',
    marginBottom: spacing.xl,
  },
  headerImage: {
    width: 128,
    height: 128,
    borderRadius: 64,
  },
  headerTextContainer: {
    marginBottom: spacing.lg,
  },
  title: {
    fontFamily: 'BeVietnamPro_700Bold',
    marginBottom: spacing.xs,
  },
  subtitle: {
    fontFamily: 'BeVietnamPro_400Regular',
  },
  form: {
    gap: spacing.sm,
  },
  input: {
    backgroundColor: 'transparent',
    fontFamily: 'BeVietnamPro_400Regular',
  },
  forgotPasswordContainer: {
    alignItems: 'flex-end',
    paddingVertical: spacing.xs,
  },
  forgotPasswordText: {
    fontFamily: 'BeVietnamPro_600SemiBold',
    fontSize: 12,
  },
  loginButton: {
    marginTop: spacing.sm,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 20,
    elevation: 4,
  },
  buttonContent: {
    paddingVertical: 6,
  },
  buttonLabel: {
    fontFamily: 'BeVietnamPro_600SemiBold',
    fontSize: 16,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: spacing.lg,
  },
  divider: {
    flex: 1,
    height: 1,
  },
  dividerText: {
    marginHorizontal: spacing.md,
    fontFamily: 'BeVietnamPro_400Regular',
    fontSize: 14,
  },
  qrButton: {
    borderColor: '#e1e3e4',
  },
  qrButtonLabel: {
    fontFamily: 'BeVietnamPro_600SemiBold',
    fontSize: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: spacing.xl,
  },
  registerLink: {
    fontFamily: 'BeVietnamPro_600SemiBold',
  },
});
