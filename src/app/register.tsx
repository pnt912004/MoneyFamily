import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, Image } from 'react-native';
import { Text, TextInput, Button, useTheme } from 'react-native-paper';
import { Link, useRouter } from 'expo-router';
import { spacing, borderRadius } from '../theme/theme';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../config/firebase';

export default function RegisterScreen() {
  const theme = useTheme();
  const router = useRouter();
  const [fullName, setFullName] = useState('');
  const [contact, setContact] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [secureConfirmTextEntry, setSecureConfirmTextEntry] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleRegister = async () => {
    if (!fullName || !contact || !password) {
      setError('Vui lòng điền đầy đủ thông tin');
      return;
    }
    if (password !== confirmPassword) {
      setError('Mật khẩu xác nhận không khớp');
      return;
    }

    setLoading(true);
    setError('');
    try {
      // 1. Tạo user trên Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, contact, password);
      const user = userCredential.user;

      // 2. Tạo document trong Firestore
      await setDoc(doc(db, 'users', user.uid), {
        fullName: fullName,
        email: contact, // assuming contact is email for now
        createdAt: new Date().toISOString(),
      });

      // AuthContext will automatically redirect to (tabs) because user is now logged in
    } catch (err: any) {
      setError('Đăng ký thất bại: ' + err.message);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.surface }]}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.headerTextContainer}>
          <Text variant="headlineMedium" style={[styles.title, { color: theme.colors.onSurface }]}>
            Tạo tài khoản mới
          </Text>
          <Text variant="bodyLarge" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Bắt đầu quản lý chi tiêu gia đình ngay hôm nay.
          </Text>
        </View>

        <View style={styles.form}>
          <TextInput
            mode="outlined"
            label="Họ và tên"
            placeholder="Nhập họ và tên của bạn"
            value={fullName}
            onChangeText={setFullName}
            style={styles.input}
            outlineColor={theme.colors.outline}
            activeOutlineColor={theme.colors.primary}
            theme={{ roundness: borderRadius.lg }}
          />

          <TextInput
            mode="outlined"
            label="Email hoặc Số điện thoại"
            placeholder="Nhập email hoặc số điện thoại"
            value={contact}
            onChangeText={setContact}
            style={styles.input}
            outlineColor={theme.colors.outline}
            activeOutlineColor={theme.colors.primary}
            theme={{ roundness: borderRadius.lg }}
          />

          <TextInput
            mode="outlined"
            label="Mật khẩu"
            placeholder="Tạo mật khẩu"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={secureTextEntry}
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

          <TextInput
            mode="outlined"
            label="Xác nhận mật khẩu"
            placeholder="Nhập lại mật khẩu"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={secureConfirmTextEntry}
            right={
              <TextInput.Icon
                icon={secureConfirmTextEntry ? 'eye-off-outline' : 'eye-outline'}
                onPress={() => setSecureConfirmTextEntry(!secureConfirmTextEntry)}
              />
            }
            style={styles.input}
            outlineColor={theme.colors.outline}
            activeOutlineColor={theme.colors.primary}
            theme={{ roundness: borderRadius.lg }}
          />

          <Button
            mode="contained"
            icon="arrow-right"
            onPress={handleRegister}
            loading={loading}
            disabled={loading}
            style={styles.registerButton}
            contentStyle={styles.buttonContent}
            labelStyle={styles.buttonLabel}
            theme={{ roundness: borderRadius.full }}
            buttonColor={theme.colors.primary}
          >
            Đăng ký
          </Button>

          {error ? <Text style={{ color: theme.colors.error, textAlign: 'center' }}>{error}</Text> : null}
        </View>

        <View style={styles.dividerContainer}>
          <View style={[styles.divider, { backgroundColor: theme.colors.surfaceVariant }]} />
          <Text style={[styles.dividerText, { color: theme.colors.outline }]}>HOẶC ĐĂNG KÝ BẰNG</Text>
          <View style={[styles.divider, { backgroundColor: theme.colors.surfaceVariant }]} />
        </View>

        <View style={styles.socialContainer}>
          <Button
            mode="outlined"
            icon="google"
            onPress={() => {}}
            style={styles.socialButton}
            contentStyle={styles.socialButtonContent}
            labelStyle={styles.socialButtonLabel}
            textColor={theme.colors.onSurface}
            theme={{ roundness: borderRadius.md }}
          >
            Google
          </Button>
          <Button
            mode="contained"
            icon="facebook"
            onPress={() => {}}
            style={[styles.socialButton, { backgroundColor: '#1877F2' }]}
            contentStyle={styles.socialButtonContent}
            labelStyle={[styles.socialButtonLabel, { color: 'white' }]}
            theme={{ roundness: borderRadius.md }}
          >
            Facebook
          </Button>
        </View>

        <View style={styles.footer}>
          <Text style={{ color: theme.colors.onSurfaceVariant, fontFamily: 'BeVietnamPro_400Regular' }}>
            Đã có tài khoản?{' '}
          </Text>
          <Link href="/login" asChild>
            <TouchableOpacity>
              <Text style={[styles.loginLink, { color: theme.colors.primary }]}>
                Đăng nhập ngay
              </Text>
            </TouchableOpacity>
          </Link>
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
    flexGrow: 1,
    paddingHorizontal: spacing.marginMobile,
    justifyContent: 'center',
    paddingVertical: spacing.xl,
  },
  headerTextContainer: {
    marginBottom: spacing.lg,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'BeVietnamPro_700Bold',
    marginBottom: spacing.xs,
  },
  subtitle: {
    fontFamily: 'BeVietnamPro_400Regular',
    textAlign: 'center',
  },
  form: {
    gap: spacing.sm,
  },
  input: {
    backgroundColor: 'transparent',
    fontFamily: 'BeVietnamPro_400Regular',
  },
  registerButton: {
    marginTop: spacing.md,
    shadowColor: '#006e1c',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 4,
  },
  buttonContent: {
    paddingVertical: 6,
    flexDirection: 'row-reverse',
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
    fontFamily: 'BeVietnamPro_600SemiBold',
    fontSize: 12,
  },
  socialContainer: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  socialButton: {
    flex: 1,
    borderColor: '#e1e3e4',
  },
  socialButtonContent: {
    paddingVertical: 4,
  },
  socialButtonLabel: {
    fontFamily: 'BeVietnamPro_600SemiBold',
    fontSize: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: spacing.xl,
  },
  loginLink: {
    fontFamily: 'BeVietnamPro_600SemiBold',
    textDecorationLine: 'underline',
  },
});
